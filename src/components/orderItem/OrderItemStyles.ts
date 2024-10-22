import {StyleSheet} from 'react-native';
import { black, darkCamel, lightCamel, peach } from '../../constants/colors';

export const styles = StyleSheet.create({
  orderWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  orderStatus: {fontWeight: '300', fontSize: 13, color: black},
  line: {
    backgroundColor: peach,
    height: 2,
    width: '100%',
    marginTop: 9,
  },
  wrap: {flexDirection: 'row', gap: 8},
  img: {width: 89, height: 89},
  sb: {justifyContent: 'space-between', width: '73%'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  heading: {fontWeight: '500', fontSize: 15, color: darkCamel},
  desc: {fontWeight: '300', fontSize: 12, color: black, width: '80%'},
  imgWrap: {flexDirection: 'row', gap: 4, marginTop: 12, position: 'absolute', right: 0},
  priceWrap: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price: {fontWeight: '400', fontSize: 14, color: black},
  delWrap: {
    width: 19,
    height: 19,
    borderRadius: 9.19,
    borderWidth: 1.17,
    borderColor: lightCamel,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
