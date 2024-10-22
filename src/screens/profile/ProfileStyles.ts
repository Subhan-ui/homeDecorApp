import {StyleSheet} from 'react-native';

import {black, darkBrown} from '../../constants/colors';

export const styles = StyleSheet.create({
  wrapImg: {width: '100%', alignItems: 'center', marginTop: -4},
  img: {width: 148, height: 148, borderRadius: 114},
  name: {
    fontWeight: '700',
    fontSize: 20,
    color: darkBrown,
    marginTop: 8,
  },
  id: {fontWeight: '600', fontSize: 13, color: black},
});
