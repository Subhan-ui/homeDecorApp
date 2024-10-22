import {useState} from 'react';
import {ToastAndroid} from 'react-native';

import {SignupType} from '../../types/types';
import {useAppDispatch} from '../../store/hook';
import {signup} from '../../store/slices/auth.slice';
import useTypeNavigation from '../../navigation/useTypeNavigation';

const date = new Date().toISOString();

export const useSignup = () => {
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const [data, setData] = useState<SignupType>({
    name: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: date,
    password: '',
    confirmPassword: '',
  });
  const handleChange = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async () => {
    const {name, email, mobileNumber, dateOfBirth, password, confirmPassword} =
      data;
    if (
      name === '' ||
      email === '' ||
      mobileNumber === '' ||
      dateOfBirth === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
      return;
    }
    if (password !== confirmPassword) {
      ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
      return;
    }
    if (!validateEmail(email)) {
      ToastAndroid.show('Please enter a valid email', ToastAndroid.SHORT);
      return;
    }
    if (!validatePassword(password)) {
      ToastAndroid.show(
        'Password must contain an Upper case, Lower case, number and special character',
        ToastAndroid.SHORT,
      );
      return;
    }
    try {
      setData(prev => ({...prev, email: prev.email.toLowerCase()}));
      const response = (await dispatch(signup(data))).payload;
      setData({
        name: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: date,
        password: '',
        confirmPassword: '',
      });
      navigation.navigate('VerifyEmail');
      ToastAndroid.show('Account created Successfully', ToastAndroid.SHORT);
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  return {handleChange, data, handleSubmit};
};
