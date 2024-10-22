import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  fullH: {height: screenHeight},
  scroll: {marginHorizontal: 22, marginBottom: '21%'},
  headerWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 33,
  },
  h1: {fontWeight: '600', fontSize: 20, color: '#f485a4'},
  p: {fontWeight: '400', fontSize: 14, color: '#363130'},
  mt: {marginTop: 20},
  scrollWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 20,
  },
  activeBar: {
    height: 4,
    width: 20,
    backgroundColor: '#363130',
    borderRadius: 12,
  },
  unactive: {
    height: 4,
    width: 20,
    backgroundColor: '#F4B5A4',
    borderRadius: 12,
  },
  heading: {
    fontWeight: '600',
    fontSize: 15,
    color: '#cc7861',
    marginVertical: 20,
  },
});
