import {StyleSheet} from 'react-native';
import { black, darkCamel, lightCamel } from '../../constants/colors';

export const styles = StyleSheet.create({
  heading: {
    fontWeight: '500',
    fontSize: 15,
    color: darkCamel,
    marginTop: 13,
  },
  box: {
    height: 132,
    borderRadius: 12,
    backgroundColor: lightCamel,
    marginTop: 39,
    display: 'flex',
    flexDirection: 'row',
  },
  wrapper: {width: '50%', paddingTop: 22, paddingLeft: 26},
  h2: {
    fontWeight: '500',
    fontSize: 15,
    color: black,
    marginBottom: 8,
  },
  p: {
    fontWeight: '300',
    fontSize: 13,
    color: black,
    marginBottom: 15,
  },
  btnWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 50,
    height: 19,
    borderRadius: 52,
    paddingVertical: 4.22,
    paddingHorizontal: 6.33,
    backgroundColor: 'white',
  },
  btnText: {fontSize: 8, fontWeight: '400', color: black},
  img: {position: 'absolute', bottom: 4},
});
