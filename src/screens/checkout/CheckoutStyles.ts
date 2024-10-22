import {StyleSheet} from 'react-native';

import {darkCamel, darkGrey, lightCamel, linen} from '../../constants/colors';

export const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 15,
    color: darkCamel,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  addressBox: {
    height: 99,
    width: '100%',
    borderRadius: 13,
    backgroundColor: linen,
    paddingTop: 19,
    paddingLeft: 24,
    marginTop: 10.5,
  },
  address: {fontWeight: '400', fontSize: 14, color: darkGrey},
  summaryWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  summaryTextWrap: {flexDirection: 'row', gap: 27},
  summaryText: {fontWeight: '400', fontSize: 14, color: darkGrey},
  summaryText2: {
    fontWeight: '400',
    fontSize: 14,
    color: lightCamel,
    position: 'absolute',
    left: '190%',
  },
  total: {fontWeight: '600', fontSize: 20, color: lightCamel},
  mt: {marginTop: 34},
  radioWrap: {
    backgroundColor: linen,
    height: 147,
    width: '100%',
    borderRadius: 13,
    marginTop: 13,
    paddingVertical: 22,
    paddingLeft: 17,
    paddingRight: 4,
  },
  h1: {color: darkCamel, fontSize: 20, fontWeight: '600'},
  deliverWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  deliverP: {fontSize: 15, fontWeight: '500', color: darkGrey},
  deliverP2: {fontWeight: '500', fontSize: 15, color: lightCamel},
});
