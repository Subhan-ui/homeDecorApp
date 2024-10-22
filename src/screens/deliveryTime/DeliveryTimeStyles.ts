import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  stSectionWrap: {width: '100%', gap: 11},
  text: {
    fontWeight: '500',
    fontSize: 15,
    color: '#cc7861',
  },
  subText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#363130',
  },
  stBox: {
    height: 99,
    width: '100%',
    backgroundColor: '#faf0e6',
    borderRadius: 13,
    paddingTop: 19,
    paddingLeft: 24,
  },
  mapImg: {
    width: '100%',
    height: 184,
    marginTop: 18,
    marginBottom: 29,
  },
  deliveryWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 13,
  },
  h1: {fontWeight: '600', fontSize: 20, color: '#cc7861'},
  h2: {fontWeight: '500', fontSize: 15, color: '#391713'},
  h3: {fontWeight: '500', fontSize: 15, color: '#f4b5a4'},
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ffd8c7',
    marginBottom: 24,
  },
  trackingWrap: {flexDirection: 'row', gap: 8.8},
  textWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    position: 'relative',
    bottom: 5.5,
    width: '95%',
  },
  p: {
    width: 226,
    fontWeight: '300',
    fontSize: 13,
    color: '#391713',
  },
  time: {color: '#F4B5A4', fontWeight: '400', fontSize: 14},
});
