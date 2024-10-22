import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  reviewWrap: {
    width: '100%',
    height: 128,
    backgroundColor: '#faf0e6',
    borderRadius: 20,
    paddingRight: 8,
  },
  imgWrap: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 16,
    gap: 5,
    alignItems: 'center',
  },
  img: {height: 35, width: 35, borderRadius: 84.55},
  imgText: {fontWeight: '700', fontSize: 15, color: '#4b4544'},
  comment: {
    fontWeight: '300',
    fontSize: 13,
    color: '#4b4544',
    marginLeft: 56,
    marginTop: 6,
  },
  seenWrap: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    gap: 9,
    marginTop: 6,
  },
  seen: {flexDirection: 'row', alignItems: 'center', gap: 7},
  like: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginRight: 12,
  },
  text: {
    fontWeight: '300',
    fontSize: 13,
    color: '#363130',
  },
});
