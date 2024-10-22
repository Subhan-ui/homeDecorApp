import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrap: {flexDirection: 'row', alignItems: 'center'},
  wrapper: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F4B5A4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F4B5A4',
  },
  label: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#391713',
  },
  container: {
    width: 171,
    height: 21,
    backgroundColor: 'white',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 14,
  },
  containerText: {fontWeight: '400', fontSize: 14, color: '#4b4544'},
});
