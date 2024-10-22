import {useNavigation, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigatorTypes} from '../types/types';

const useTypeNavigation = () => useNavigation<NavigationProp<navigatorTypes>>();
export const useNavigations = () => {
  const Stack = createNativeStackNavigator<navigatorTypes>();

  return {Stack};
};

export default useTypeNavigation;
