import {StyleSheet} from 'react-native';

import {darkCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  textWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    fontWeight: '500',
    fontSize: 15,
    color: darkCamel,
  },
  textU: {
    fontWeight: '400',
    fontSize: 12,
    color: darkCamel,

    textDecorationLine: 'underline',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
