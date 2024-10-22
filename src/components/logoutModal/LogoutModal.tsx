import {Modal, Pressable, Text, View} from 'react-native';
import {useAuth} from '../../navigation/authContext';
import {styles} from './LogoutModalStyle';

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
              style={[styles.btn, {backgroundColor: '#F4B5A4'}]}
              onPress={close}>
              <Text style={[styles.btnText, {color: '#CC7861'}]}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.btn, {backgroundColor: '#FAF0E6'}]}
              onPress={logout}>
              <Text style={[styles.btnText, {color: '#DCBEB6'}]}>Log out</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
