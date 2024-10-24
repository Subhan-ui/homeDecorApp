import {StyleSheet} from 'react-native';
import {black, darkBrown} from '../../../constants/colors';

export const styles = StyleSheet.create({
  wrap: {width: '100%', gap: 8},
  text: {fontWeight: '500', fontSize: 15, color: darkBrown},
  btn: {
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 21,
    paddingVertical: 13,
  },
  placeholder: {fontSize: 15, fontWeight: '500', color: black},
});
