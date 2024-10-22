import {StyleSheet} from 'react-native';
import { darkBrown, lightCamel } from '../../constants/colors';

export const styles = StyleSheet.create({
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconWrap: {flexDirection: 'row', gap: 23, alignItems: 'center'},
  textWrap: {
    backgroundColor: lightCamel,
    width: 30,
    height: 30,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: darkBrown, fontWeight: '500', fontSize: 15},
});
