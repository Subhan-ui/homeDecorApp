import {Dimensions, StyleSheet} from 'react-native';
import { black } from '../../constants/colors';

const screenHeight = Dimensions.get('window').height - 276;

export const styles = StyleSheet.create({
  wrap: {
    height: screenHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: black,
    marginTop: 27,
    width: 202,
    textAlign: 'center',
  },
});
