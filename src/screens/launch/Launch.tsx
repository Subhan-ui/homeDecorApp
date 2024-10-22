import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './LaunchStyles';
import { darkCamel, lightCamel, linen, peach } from '../../constants/colors';

const Launch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/icons/logo.png')} />
        <Text style={styles.logoTextU}>HOME</Text>
        <Text style={styles.logoTextL}>DECOR</Text>
      </View>
      <Text style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.{' '}
      </Text>
      <View style={styles.btnWrap}>
        <Pressable style={[styles.btn, {backgroundColor: lightCamel}]}>
          <Text style={[{color: darkCamel}, styles.btnText]}>Log In</Text>
        </Pressable>
        <Pressable style={[styles.btn, {backgroundColor: linen}]}>
          <Text style={[styles.btnText, {color: peach}]}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Launch;
