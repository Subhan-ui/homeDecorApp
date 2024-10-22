import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  fullH: {height: screenHeight},
  view: {
    marginRight: 22,
    marginLeft: 27,
    marginBottom: '21%',
    display: 'flex',
  },
});
