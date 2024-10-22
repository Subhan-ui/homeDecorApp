import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginLeft: 12,
  },
  children: {
    height: 35,
    width: 35,
    backgroundColor: '#F4B5A4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
  },
  text: {fontWeight: '400', fontSize: 20, color: '#4b4544'},
});
