import {StyleSheet} from 'react-native';
import { darkBrown } from '../../../constants/colors';

export const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: 8,
  },
  title: {fontWeight: '500', fontSize: 15, color: darkBrown},
  inputWrap: {width: '100%', position: 'relative'},
  input: {
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 21,
    paddingVertical: 13,
    fontSize: 16,
    fontWeight: '400',
  },
  eye: {position: 'absolute', right: 24, top: 17},
});
