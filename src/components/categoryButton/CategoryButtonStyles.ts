import {StyleSheet} from 'react-native';

import {lightCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightCamel,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
