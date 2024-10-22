import {useState} from 'react';
import {resetPasswordType} from '../../types/types';
import {ToastAndroid} from 'react-native';
import {useAppDispatch} from '../../store/hook';
import {resetPassword} from '../../store/slices/auth.slice';
import useTypeNavigation from '../../navigation/useTypeNavigation';

export const useResetPassword = () => {
  const [data, setData] = useState<resetPasswordType>({
    password: '',
    confirmPassword: '',
    resetCode: '',
  });
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const handleChange = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = async () => {
    if (!validatePassword(data.password)) {
      ToastAndroid.show('Please enter a valid password', ToastAndroid.SHORT);
      return;
    }
    if (data.password !== data.confirmPassword) {
      ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
      return;
    }
    try {
      const response = await dispatch(resetPassword(data));
      setData({password: '', confirmPassword: '', resetCode: ''});
      ToastAndroid.show(response.payload, ToastAndroid.SHORT);
      navigation.navigate('Login');
    } catch (error) {
      ToastAndroid.show(error as string, ToastAndroid.SHORT);
    }
  };
  return {handleChange, data, handleSubmit};
};
