import {useState} from 'react';

import {loginType} from '../../types/types';
import {useAuth} from '../../navigation/authContext';
import {ToastAndroid} from 'react-native';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useLogin = () => {
  const [data, setData] = useState<loginType>({
    email: '',
    password: '',
  });
  const {login, googleLogin} = useAuth();

  const handleChange = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    login(data, () => setData(prev => ({email: '', password: ''})));
  };

  const loginGoogle = async () => {
    await googleLogin()
      .then((user: FirebaseAuthTypes.User | null) => {
        if (user) {
          ToastAndroid.show(user.email || '', ToastAndroid.SHORT);
        }
      })
      .catch((err: Error) => {
        ToastAndroid.show(err.message, ToastAndroid.SHORT);
        console.log(err);
      });
  };
  return {data, handleChange, handleSubmit, googleLogin: loginGoogle};
};
