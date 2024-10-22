import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  img: {width: '100%', height: 267, borderRadius: 20},
  mt: {marginTop: 32, width: '100%'},
  title: {fontWeight: '600', fontSize: 20, color: '#4b4544'},
  desc: {
    fontWeight: '300',
    fontSize: 13,
    color: '#4b4544',
    marginTop: 19,
    textAlign: 'justify',
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F4B5A4',
    marginTop: 14,
    marginBottom: 11,
  },
  priceWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {fontWeight: '600', fontSize: 20, color: '#f4b5a4'},
  imgWrap: {flexDirection: 'row', gap: 8, alignItems: 'center'},
  reviewWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textReview: {
    fontWeight: '400',
    fontSize: 14,
    color: '#4b4544',
    marginTop: 7,
  },
  iconWrap: {
    height: 20,
    width: 20,
    backgroundColor: '#F4B5A4',
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
