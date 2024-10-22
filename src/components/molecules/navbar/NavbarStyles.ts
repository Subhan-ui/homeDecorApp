import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    height: 58,
    width: screenWidth,
    paddingVertical: 15,
    paddingHorizontal: 58,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 41,
    position: 'absolute',
    bottom: 24,
    backgroundColor: 'white',
  },
});
