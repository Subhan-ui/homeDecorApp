import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconWrap: {flexDirection: 'row', gap: 23, alignItems: 'center'},
  textWrap: {
    backgroundColor: '#f4b5a4',
    width: 30,
    height: 30,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#363130', fontWeight: '500', fontSize: 15},
});
