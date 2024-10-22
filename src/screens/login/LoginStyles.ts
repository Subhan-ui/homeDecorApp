import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  wholeWrap: {height: screenHeight, width: '100%', position: 'relative'},
  welcome: {
    fontWeight: '600',
    fontSize: 20,
    color: '#363130',
    marginTop: 45,
  },
  p: {
    fontWeight: '400',
    fontSize: 14,
    color: '#363130',
    marginTop: 10,
  },
  forgotPass: {
    fontWeight: '600',
    fontSize: 14,
    color: '#363130',
    marginTop: 18,
    textAlign: 'center',
  },
  otherOpt: {width: '100%', position: 'absolute', bottom: 59},
  otherText: {fontWeight: '300', fontSize: 13, textAlign: 'center'},
  imgWrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 19.81,
    width: '100%',
    justifyContent: 'center',
    marginTop: 19.88,
  },
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 19.12,
    gap: 2,
    justifyContent: 'center',
  },
  dont: {fontWeight: '300', fontSize: 13, textAlign: 'center'},
  signup: {
    fontWeight: '300',
    fontSize: 13,
    textAlign: 'center',
    color: '#CC7861',
  },
});
