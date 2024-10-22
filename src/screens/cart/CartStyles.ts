import {StyleSheet, Dimensions} from 'react-native';

import {darkCamel, darkGrey, lightCamel} from '../../constants/colors';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  flex: {flex: 1},
  contentContainer: {
    paddingVertical: 20,
    gap: 29,
  },
  scroll: {flexGrow: 1, height: 0.4 * screenHeight},
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: lightCamel,
    height: 1,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  h1: {fontWeight: '500', fontSize: 15, color: darkGrey},
  p: {fontWeight: '400', fontSize: 14, color: darkCamel},
  line2: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: lightCamel,
    borderStyle: 'dashed',
    marginTop: 21,
    height: 12,
  },
  totalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  h2: {fontWeight: '600', fontSize: 20, color: darkGrey},
  p2: {fontWeight: '500', fontSize: 15, color: darkCamel},
});
