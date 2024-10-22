import {StyleSheet} from 'react-native';

import {darkCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 15,
    color: darkCamel,
    marginTop: 20,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
