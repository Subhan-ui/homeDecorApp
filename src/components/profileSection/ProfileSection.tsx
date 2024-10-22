import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './ProfileSectionStyles';
import { black } from '../../constants/colors';

const ProfileSection = () => {
  const navigation = useTypeNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('EditProfile')}
        style={styles.btn}>
        <Octicons name="person" size={26} color={black} />
        <Text style={styles.btnText}>Profile</Text>
      </Pressable>
      <View style={styles.line} />
      <Pressable
        onPress={() => navigation.navigate('Wishlist')}
        style={styles.btn}>
        <Image source={require('../../assets/icons/wishlistblack.png')} />
        <Text style={styles.btnText}>Wishlist</Text>
      </Pressable>
      <View style={styles.line} />
      <Pressable
        onPress={() => navigation.navigate('Order')}
        style={styles.btn}>
        <Image source={require('../../assets/icons/orders.png')} />
        <Text style={styles.btnText}>My Orders</Text>
      </Pressable>
    </View>
  );
};

export default ProfileSection;
