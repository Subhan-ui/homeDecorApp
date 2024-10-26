import { Dimensions, StyleSheet } from "react-native";
import {darkCamel, lightCamel, linen} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export const styles= StyleSheet.create({
    modal: {width, paddingHorizontal: 25},
    inputWrap: {
        marginHorizontal: 25,
        marginTop: 28,
        borderWidth: 1,
        borderColor: lightCamel,
        borderRadius: 30,
        paddingHorizontal: 12,
        marginVertical: 9,
      },
      input: {
        width: '100%',
        fontWeight: '300',
        fontSize: 13,
        color: '#232323',
      },
      iconWrap: {
        backgroundColor: lightCamel,
        width: 26,
        height: 26,
        borderRadius: 34,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 12,
        top: 12,
      }, 
      searchWrap: {marginHorizontal: 25, marginTop: 45},
      searchText: {fontSize: 20, fontWeight: '600', color: darkCamel},
      btnWrap: {marginTop: 21, gap: 11},
      btn: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        backgroundColor: linen,
        borderRadius: 36,
        gap: 24,
        paddingLeft: 14,
      },
      btnText: {fontSize: 15, fontWeight: '500', color: '#232323'},
      
})