import {Dimensions, StyleSheet} from 'react-native';
import {
  black,
  darkBrown,
  darkCamel,
  lightCamel,
  linen,
} from '../../constants/colors';
import {CurrentRenderContext} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  imgWrap: {
    height: 0.62 * height,
    width,
    backgroundColor: linen,
    borderBottomLeftRadius: 34,
  },
  img: {width, height: 0.58 * height, borderBottomLeftRadius: 34},
  textWrap: {
    marginTop: 46,
    alignItems: 'center',
    gap: 26,
    height: 0.27 * height,
  },
  h1: {
    color: lightCamel,
    fontWeight: '600',
    fontSize: 28,
    textAlign: 'center',
    width: 0.8 * width,
  },
  p: {
    fontWeight: '400',
    fontSize: 14,
    color: darkBrown,
    width: 0.9 * width,
    textAlign: 'center',
  },
  bottomWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: width,
    paddingHorizontal: 20,
  },
  navWrap: {flexDirection: 'row', gap: 7},
  skipText: {
    fontWeight: '400',
    fontSize: 14,
    color: black,
    position: 'absolute',
    zIndex: 999,
    right: 20,
    top: 41,
    gap: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  navActive: {
    width: 36,
    height: 7,
    borderRadius: 22,
    backgroundColor: lightCamel,
  },
  nav: {
    width: 12,
    height: 7,
    borderRadius: 22,
    backgroundColor: linen,
  },
  navButton: {
    width: 133,
    height: 41,
    borderRadius: 23,
    backgroundColor: lightCamel,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: darkCamel,
  },
});
