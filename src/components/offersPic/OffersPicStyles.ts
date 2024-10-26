import {StyleSheet} from 'react-native';
import {darkBrown, darkCamel, lightCamel} from '../../constants/colors';

export const styles = StyleSheet.create({
  trapezoid: {
    width: '65%',
    height: '100%',
    borderBottomWidth: 132,
    borderBottomColor: lightCamel,
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
    right: 0,
  },
  wrap: {height: 132, width: '100%'},
  img: {width: '70%', height: '100%'},
  topTextWrap: {position: 'absolute', width: '50%', right: 10, top: 10},
  h1: {
    color: darkBrown,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'right',
    lineHeight: 30,
    borderRightWidth: 10,
    borderRightColor: darkBrown,
    paddingRight: 20,
  },
  belowTextWrap: {
    backgroundColor: darkCamel,
    paddingLeft: 20,
    paddingVertical: 5,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 5,
    position: 'relative',
    left: 10,
  },
  text: {color: 'white', fontSize: 15, fontWeight: '500'},
});
