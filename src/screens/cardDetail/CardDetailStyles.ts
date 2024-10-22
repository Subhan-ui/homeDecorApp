import {StyleSheet} from 'react-native';

import {black, lightCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  img: {width: '100%', height: 267, borderRadius: 20},
  mt: {marginTop: 32, width: '100%'},
  title: {fontWeight: '600', fontSize: 20, color: black},
  desc: {
    fontWeight: '300',
    fontSize: 13,
    color: black,
    marginTop: 19,
    textAlign: 'justify',
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: lightCamel,
    marginTop: 14,
    marginBottom: 11,
  },
  priceWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {fontWeight: '600', fontSize: 20, color: lightCamel},
  imgWrap: {flexDirection: 'row', gap: 8, alignItems: 'center'},
  reviewWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textReview: {
    fontWeight: '400',
    fontSize: 14,
    color: black,
    marginTop: 7,
  },
  iconWrap: {
    height: 20,
    width: 20,
    backgroundColor: lightCamel,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
