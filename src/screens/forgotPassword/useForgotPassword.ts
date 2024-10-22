import {useState} from 'react';
import {ToastAndroid} from 'react-native';

import {useAppDispatch} from '../../store/hook';
import {forgotPassword} from '../../store/slices/auth.slice';
import useTypeNavigation from '../../navigation/useTypeNavigation';

export const useForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();

  const handleChange = (text: string) => {
    setEmail(text);
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      ToastAndroid.show('Please enter a valid email', ToastAndroid.SHORT);
      return;
    }
    try {
      setEmail(prev => prev.toLowerCase());
      const response = await dispatch(forgotPassword(email));
      navigation.navigate('ResetPassword');
      ToastAndroid.show('Please check your email', ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(error as string, ToastAndroid.SHORT);
    }
  };
  return {email, handleChange, handleSubmit};
};
