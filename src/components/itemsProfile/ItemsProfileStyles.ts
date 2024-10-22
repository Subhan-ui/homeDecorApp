import {StyleSheet} from 'react-native';
import { black, lightCamel } from '../../constants/colors';

export const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginLeft: 12,
  },
  children: {
    height: 35,
    width: 35,
    backgroundColor: lightCamel,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
  },
  text: {fontWeight: '400', fontSize: 20, color: black},
});
