import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {marginTop: 10, width: '48%'},
  fullW: {width: '100%'},
  paddingL: {paddingLeft: 6},
  h1: {fontWeight: '500', fontSize: 15, color: '#4b4544'},
  p: {fontWeight: '300', fontSize: 12, color: '#4b4544'},
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#f4b5a4',
    marginTop: 9,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  priceText: {fontWeight: '500', fontSize: 15, color: '#cc7861'},
  imageWrap: {display: 'flex', flexDirection: 'row', gap: 5},
  icon: {
    height: 20,
    width: 20,
    backgroundColor: '#F4B5A4',
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
