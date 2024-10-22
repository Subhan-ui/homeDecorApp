import {Dimensions, StyleSheet} from 'react-native';

import {darkBrown, lightestCamel} from '../../constants/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  wholeWrap: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: lightestCamel,
    zIndex: 0,
  },
  wrap: {
    height: 216,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  h1: {
    fontWeight: '400',
    fontSize: 17,
    color: darkBrown,
    marginTop: 33,
    textAlign: 'center',
  },
  wrapBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
    marginTop: 27,
  },
  btn: {
    borderRadius: 23,
    width: '30%',
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontWeight: '600', fontSize: 20},
});
