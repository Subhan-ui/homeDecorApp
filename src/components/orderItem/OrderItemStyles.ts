import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  orderWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  orderStatus: {fontWeight: '300', fontSize: 13, color: '#4b4544'},
  line: {
    backgroundColor: '#DCBEB6',
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
  heading: {fontWeight: '500', fontSize: 15, color: '#CC7861'},
  desc: {fontWeight: '300', fontSize: 12, color: '#4B4544', width: '80%'},
  imgWrap: {flexDirection: 'row', gap: 4, marginTop: 12, position: 'absolute', right: 0},
  priceWrap: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price: {fontWeight: '400', fontSize: 14, color: '#4B4544'},
  delWrap: {
    width: 19,
    height: 19,
    borderRadius: 9.19,
    borderWidth: 1.17,
    borderColor: '#f4b5a4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
