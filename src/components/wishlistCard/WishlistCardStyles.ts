import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sb: {flexDirection: 'row', justifyContent: 'space-between'},
  wrap: {flexDirection: 'row', gap: 24},
  img: {width: 89, height: 'auto', minHeight: 89},
  textWrap: {flexDirection: 'column', gap: 2, width: '70%'},
  h1Wrap: {flexDirection: 'row', gap: 6, alignItems: 'center'},
  h1: {fontWeight: '500', fontSize: 15, color: '#cc7861'},
  p: {fontWeight: '400', fontSize: 14, color: '#4b4544'},
  iconWrap: {
    width: 19,
    height: 19,
    borderRadius: 9.19,
    borderColor: '#f4b5a4',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
