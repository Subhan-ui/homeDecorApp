import React, {createContext, useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {useAppDispatch, useAppSelector} from '../store/hook';
import {google, loginUser} from '../store/slices/auth.slice';
import {loginType} from '../types/types';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '588180984406-6n4oqgglh1r57ngjnbnmlab85hek3lh6.apps.googleusercontent.com',
    });

    const checkToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsLogin(!!token);
    };
    checkToken();
  }, []);

  const login = async (data: loginType, empty: () => void) => {
    try {
      const response = await dispatch(loginUser(data)).unwrap();
      if (
        typeof response.accessToken === 'string' &&
        typeof response.refreshToken === 'string'
      ) {
        await AsyncStorage.setItem('authToken', response.accessToken);
        await AsyncStorage.setItem('refreshToken', response.refreshToken);
        setIsLogin(true);
        ToastAndroid.show(
          `${response.user.name} logged in successfully`,
          ToastAndroid.SHORT,
        );
      } else {
        ToastAndroid.show('Incorrect Email or Password', ToastAndroid.SHORT);
      }
      empty();
    } catch (error) {
      ToastAndroid.show(error as string, ToastAndroid.LONG);
    }
  };

  const googleLogin = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const signInResult = await GoogleSignin.signIn();

    let idToken = signInResult.data?.idToken;
    if (!idToken) {
      throw new Error('No ID token found');
    }
    if (signInResult?.data) {
      const googleCredential = auth.GoogleAuthProvider.credential(
        signInResult?.data?.idToken,
      );
      const data = {
        name: signInResult.data?.user.name as string,
        picture: signInResult.data?.user.photo as string,
        email: signInResult.data?.user.email,
      };
      const response = await dispatch(google(data)).unwrap();
      if (
        typeof response.accessToken === 'string' &&
        typeof response.refreshToken === 'string'
      ) {
        await AsyncStorage.setItem('authToken', response.accessToken);
        await AsyncStorage.setItem('refreshToken', response.refreshToken);
        setIsLogin(true);
        ToastAndroid.show(
          `${response.user.name} logged in successfully`,
          ToastAndroid.SHORT,
        );
      } else {
        ToastAndroid.show('Incorrect Email or Password', ToastAndroid.SHORT);
      }
      return auth().signInWithCredential(googleCredential);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('authToken');
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{isLogin, login, logout, googleLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
