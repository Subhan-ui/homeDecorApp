import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppSelector} from '../../store/hook';
import {useState} from 'react';

export const useProfile = () => {
  const states = useAppSelector(state => state.auth.userData);
  const [isVisible, setIsVisible] = useState(false);
  return {states, isVisible, setIsVisible};
};
