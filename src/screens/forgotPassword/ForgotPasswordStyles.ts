import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  fullH: {height: screenHeight},
  textWrap: {
    marginLeft: 35,
    display: 'flex',
    gap: 13.88,
    marginTop: 50,
    height: 0.2 * screenHeight,
  },
  h1: {fontSize: 20, fontWeight: '600', color: '#363130'},
  p: {fontSize: 14, fontWeight: '400', color: '#363130'},
  inputWrap: {
    height: 0.8 * screenHeight,
    backgroundColor: '#FAF0E6',
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
  },
  input2Wrap: {marginHorizontal: 32, marginTop: 50},
});
