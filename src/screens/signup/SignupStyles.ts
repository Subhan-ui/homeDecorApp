import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  fullH: {height: screenHeight},
  agreeText: {
    fontSize: 14,
    marginTop: 24,
    marginBottom: 6.88,
    color: 'black',
    marginHorizontal: '20%',
    textAlign: 'center',
  },
  bold: {fontWeight: 'bold'},
  or: {fontWeight: '300', fontSize: 13, textAlign: 'center'},
  imgWrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 19.81,
    width: '100%',
    justifyContent: 'center',
    marginTop: 19.88,
    marginBottom: 31,
  },
});
