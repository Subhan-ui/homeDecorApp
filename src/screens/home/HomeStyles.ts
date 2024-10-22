import {Dimensions, StyleSheet} from 'react-native';
import { darkBrown, darkCamel, darkPink, lightCamel } from '../../constants/colors';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  fullH: {height: screenHeight},
  scroll: {marginHorizontal: 22, marginBottom: '21%'},
  headerWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 33,
  },
  h1: {fontWeight: '600', fontSize: 20, color: darkPink},
  p: {fontWeight: '400', fontSize: 14, color: darkBrown},
  mt: {marginTop: 20},
  scrollWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 20,
  },
  activeBar: {
    height: 4,
    width: 20,
    backgroundColor: darkBrown,
    borderRadius: 12,
  },
  unactive: {
    height: 4,
    width: 20,
    backgroundColor: lightCamel,
    borderRadius: 12,
  },
  heading: {
    fontWeight: '600',
    fontSize: 15,
    color: darkCamel,
    marginVertical: 20,
  },
});
