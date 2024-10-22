import {StyleSheet} from 'react-native';
import { lightCamel } from '../../../constants/colors';

export const styles = StyleSheet.create({
  wrap: {
    marginTop: 35,
    marginRight: 24,
    marginLeft: 26,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {fontWeight: '600', fontSize: 20, color: lightCamel},
  imgWrap: {flexDirection: 'row'},
});
