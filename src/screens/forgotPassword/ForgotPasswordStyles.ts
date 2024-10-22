import {Dimensions, StyleSheet} from 'react-native';
import { darkBrown, linen } from '../../constants/colors';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  fullH: {height: screenHeight},
  textWrap: {
    marginLeft: 35,
    display: 'flex',
    gap: 13.88,
    marginTop: 50,
    height: 0.2 * screenHeight,
  },
  h1: {fontSize: 20, fontWeight: '600', color: darkBrown},
  p: {fontSize: 14, fontWeight: '400', color: darkBrown},
  inputWrap: {
    height: 0.8 * screenHeight,
    backgroundColor: linen,
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
  },
  input2Wrap: {marginHorizontal: 32, marginTop: 50},
});
