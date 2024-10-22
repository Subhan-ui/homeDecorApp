import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  wrap: {height: screenHeight, position: 'relative'},
  scroll: {
    marginRight: 22,
    marginLeft: 27,
    marginBottom: '21%',
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
