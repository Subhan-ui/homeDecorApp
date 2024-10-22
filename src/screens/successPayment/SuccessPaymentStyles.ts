import {Dimensions, StyleSheet} from 'react-native';

import {black, darkCamel} from '../../constants/colors';

const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  wrap: {
    height: 0.5 * screenHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 38,
  },
  h1: {
    fontWeight: '600',
    fontSize: 20,
    color: darkCamel,
    textAlign: 'center',
  },
  p: {
    fontWeight: '500',
    fontSize: 15,
    color: black,
    textAlign: 'center',
  },
});
