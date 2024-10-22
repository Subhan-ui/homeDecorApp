import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  wholeWrap: {
    height: screenHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap: {
    width: '80%',
    paddingVertical: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  h1: {fontWeight: '600', fontSize: 20, color: '#4b4544'},
  inputWrap: {width: '100%', marginTop: 35},
});