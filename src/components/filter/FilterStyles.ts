import {StyleSheet} from 'react-native';
import {lightCamel, peach} from '../../constants/colors';

export const styles = StyleSheet.create({
  scroll: {marginTop: 20, height: 30},
  scrollContainer: {alignItems: 'center'},
  wrapper: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  text: {
    fontWeight: '400',
    fontSize: 16,
    color: peach,
    marginHorizontal: 30,
  },
  line: {borderWidth: 0.5, borderColor: lightCamel, height: 20},
});
