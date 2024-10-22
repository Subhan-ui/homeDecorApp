import {StyleSheet} from 'react-native';
import { black } from '../../constants/colors';

export const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 36,
    marginBottom: 20,
  },
  text: {fontWeight: '400', fontSize: 14, color: black},
  textWrap: {
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
