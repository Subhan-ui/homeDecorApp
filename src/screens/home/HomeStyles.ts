import {Dimensions, StyleSheet} from 'react-native';
import {
  darkBrown,
  darkCamel,
  darkPink,
} from '../../constants/colors';

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
  heading: {
    fontWeight: '600',
    fontSize: 15,
    color: darkCamel,
    marginVertical: 20,
  },
});
