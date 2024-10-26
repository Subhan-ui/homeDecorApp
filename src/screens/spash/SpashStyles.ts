import {Dimensions, StyleSheet} from 'react-native';
import {lightCamel} from '../../constants/colors';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  wrap: {
    width,
    height,
    backgroundColor: lightCamel,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginBottom: 9,
  },
  logoTextL: {
    color: 'white',
    fontWeight: '400',
    fontSize: 33.91,
    marginTop: -19,
    letterSpacing: 14,
  },
  logoTextU: {
    color: 'white',
    fontWeight: '600',
    fontSize: 58.85,
    marginTop: -15,
  },
});
