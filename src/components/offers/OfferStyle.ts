import { StyleSheet } from "react-native";
import { darkBrown, lightCamel } from "../../constants/colors";

export const styles = StyleSheet.create({
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
    backgroundColor: darkBrown,
    borderRadius: 12,
  },
  unactive: {
    height: 4,
    width: 20,
    backgroundColor: lightCamel,
    borderRadius: 12,
  },
  loadingWrap: {height: 156, justifyContent: 'center', alignItems: 'center'},
})