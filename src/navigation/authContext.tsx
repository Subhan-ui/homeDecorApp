import React, {createContext, useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/hook';
import {loginUser} from '../store/slices/auth.slice';
import {loginType} from '../types/types';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsLogin(!!token);
    };
    checkToken();
  }, []);

  const login = async (data: loginType, empty: () => void) => {
    try {
      const response = await dispatch(loginUser(data)).unwrap();
      if (typeof response.token === 'string') {
        await AsyncStorage.setItem('authToken', response.token);
        setIsLogin(true);
        ToastAndroid.show(
          `${user.user?.email} logged in successfully`,
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

  const logout = async () => {
    await AsyncStorage.removeItem('authToken');
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{isLogin, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
