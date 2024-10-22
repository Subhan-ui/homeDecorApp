import {StyleSheet} from 'react-native';

import {darkBrown} from '../../constants/colors';

export const styles = StyleSheet.create({
  wrap: {
    marginLeft: 35,
    display: 'flex',
    gap: 13.88,
    marginTop: 50,
  },
  h1: {fontSize: 20, fontWeight: '600', color: darkBrown},
  p: {fontSize: 14, fontWeight: '400', color: darkBrown},
});
