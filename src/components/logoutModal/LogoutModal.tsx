import {Modal, Pressable, Text, View} from 'react-native';
import {useAuth} from '../../navigation/authContext';
import {styles} from './LogoutModalStyle';
import { darkCamel, lightCamel, linen, peach } from '../../constants/colors';

const LogoutModal = ({
  isVisible,
  close,
}: {
  isVisible: boolean;
  close: () => void;
}) => {
  const {logout} = useAuth();

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.wholeWrap}>
        <View style={styles.wrap}>
          <Text style={styles.h1}>Are you sure you want to logout?</Text>
          <View style={styles.wrapBtn}>
            <Pressable
              style={[styles.btn, {backgroundColor: lightCamel}]}
              onPress={close}>
              <Text style={[styles.btnText, {color: darkCamel}]}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.btn, {backgroundColor: linen}]}
              onPress={logout}>
              <Text style={[styles.btnText, {color: peach}]}>Log out</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
