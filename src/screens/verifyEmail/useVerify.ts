import {useState} from 'react';
import {ToastAndroid} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hook';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {verifyUser} from '../../store/slices/auth.slice';

export const useVerify = () => {
  const [data, setData] = useState({
    email: '',
    verificationCode: '',
  });
  const handleChange = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const user = useAppSelector(state => state.auth);
  const handleSubmit = async () => {
    const {email, verificationCode} = data;
    if (email === '' || verificationCode === '') {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
    }
    setData(prev => ({...prev, email: data.email.toLowerCase()}));
    try {
      const response = await dispatch(verifyUser(data));
      console.log(response.payload);
      if (user.status === 'succeeded') {
        navigation.navigate('Login');
        ToastAndroid.show('Email verified successfully', ToastAndroid.SHORT);
        setData({
          email: '',
          verificationCode: '',
        });
      }
      if (user.status === 'failed') {
        ToastAndroid.show(user.error as string, ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show(error as string, ToastAndroid.SHORT);
    }
  };
  return {data, handleChange, handleSubmit};
};
