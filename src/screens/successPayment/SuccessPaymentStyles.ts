import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  wrap: {
    height: 0.5 * screenHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 38,
  },
  h1: {
    fontWeight: '600',
    fontSize: 20,
    color: '#cc7861',
    textAlign: 'center',
  },
  p: {
    fontWeight: '500',
    fontSize: 15,
    color: '#4b4544',
    textAlign: 'center',
  },
});
