import {StyleSheet} from 'react-native';

import {lightCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 58,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 26,
  },
  text: {
    color: lightCamel,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
  empty: {width: 19.62},
});
