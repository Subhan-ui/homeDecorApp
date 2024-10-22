import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  flex: {flex: 1},
  contentContainer: {
    paddingVertical: 20,
    gap: 29,
  },
  scroll: {flexGrow: 1, height: 0.4 * screenHeight},
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F4B5A4',
    height: 1,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  h1: {fontWeight: '500', fontSize: 15, color: '#391713'},
  p: {fontWeight: '400', fontSize: 14, color: '#cc7861'},
  line2: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#F4B5A4',
    borderStyle: 'dashed',
    marginTop: 21,
    height: 12,
  },
  totalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  h2: {fontWeight: '600', fontSize: 20, color: '#391713'},
  p2: {fontWeight: '500', fontSize: 15, color: '#cc7861'},
});
