import {useState} from 'react';

import {useAppSelector} from '../../store/hook';

export const useProfile = () => {
  const states = useAppSelector(state => state.auth.userData);
  const [isVisible, setIsVisible] = useState(false);
  return {states, isVisible, setIsVisible};
};
