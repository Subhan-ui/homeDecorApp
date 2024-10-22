import {useState} from 'react';

import {loginType} from '../../types/types';
import {useAuth} from '../../navigation/authContext';

export const useLogin = () => {
  const [data, setData] = useState<loginType>({
    email: '',
    password: '',
  });
  const {login} = useAuth();
  const handleChange = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    login(data, () => setData(prev => ({email: '', password: ''})));
  };
  return {data, handleChange, handleSubmit};
};
