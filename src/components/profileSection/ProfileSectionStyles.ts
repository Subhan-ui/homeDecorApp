import {StyleSheet} from 'react-native';

import {black, lightCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '100%',
    height: 81,
    marginTop: 13,
    backgroundColor: lightCamel,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 31,
  },
  btn: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  btnText: {
    fontWeight: '400',
    fontSize: 13,
    color: black,
    marginTop: 8,
  },
  line: {width: 1, height: '65%', backgroundColor: 'white'},
});
