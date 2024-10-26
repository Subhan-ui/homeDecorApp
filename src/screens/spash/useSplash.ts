import {useEffect} from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {useAuth} from '../../navigation/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSplash = () => {
  const navigation = useTypeNavigation();
  const {isLogin} = useAuth();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const some = await AsyncStorage.getItem('boarding');
      if (some) {
        navigation.navigate(isLogin ? 'Home' : 'Login');
      }
      navigation.navigate(isLogin ? 'Home' : 'Boarding');
    }, 1500);

    return () => clearTimeout(timeout);
  }, [isLogin]);
};
