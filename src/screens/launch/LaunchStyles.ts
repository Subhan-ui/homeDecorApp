import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 101,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logoTextL: {
    color: '#F4B5A4',
    fontWeight: '400',
    fontSize: 33.91,
    marginTop: -19,
    letterSpacing: 14,
  },
  logoTextU: {
    color: '#F4B5A4',
    fontWeight: '600',
    fontSize: 58.85,
    marginTop: -15,
  },
  p: {
    marginHorizontal: '16%',
    textAlign: 'center',
    marginVertical: 30.88,
  },
  btnWrap: {width: '100%', display: 'flex', alignItems: 'center', gap: 7},
  btn: {
    paddingVertical: 11,
    width: '70%',
    borderRadius: 30,
    alignItems: 'center',
  },
  btnText: {fontWeight: '600', fontSize: 20},
});
