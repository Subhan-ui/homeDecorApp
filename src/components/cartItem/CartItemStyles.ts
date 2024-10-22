import {StyleSheet} from 'react-native';
import {black, darkCamel, lightCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  containerSM: {flexDirection: 'row', gap: 5},
  img: {width: 89, height: 89},
  textWrap: {flexDirection: 'column', gap: 2, width: '70%'},
  h5: {fontWeight: '500', fontSize: 15, color: darkCamel},
  h6: {fontWeight: '400', fontSize: 14, color: black},
  quantityWrap: {position: 'absolute', right: 5, top: 4},
  minusWrap: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    height: 18,
  },
  minus: {
    backgroundColor: lightCamel,
    width: 12.57,
    height: 12.65,
    borderRadius: 56,
  },
});
