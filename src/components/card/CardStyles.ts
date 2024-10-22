import {StyleSheet} from 'react-native';
import { black, darkCamel, lightCamel } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {marginTop: 10, width: '48%'},
  fullW: {width: '100%'},
  paddingL: {paddingLeft: 6},
  h1: {fontWeight: '500', fontSize: 15, color: black},
  p: {fontWeight: '300', fontSize: 12, color: black},
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: lightCamel,
    marginTop: 9,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  priceText: {fontWeight: '500', fontSize: 15, color: darkCamel},
  imageWrap: {display: 'flex', flexDirection: 'row', gap: 5},
  icon: {
    height: 20,
    width: 20,
    backgroundColor: lightCamel,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
