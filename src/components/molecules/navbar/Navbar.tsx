import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import useTypeNavigation from '../../../navigation/useTypeNavigation';
import {styles} from './NavbarStyles';

const Navbar = () => {
  const navigation = useTypeNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name="home-outline"
        size={23}
        color="#F4B5A4"
        onPress={() => navigation.navigate('Home')}
      />
      <Icon
        name="list-outline"
        size={23}
        color="#F4B5A4"
        onPress={() => navigation.navigate('ItemsPage')}
      />
      <EvilIcons
        name="cart"
        size={27}
        color="#F4B5A4"
        onPress={() => navigation.navigate('Cart')}
      />
      <MaterialCommunityIcons
        name="heart-box"
        size={26}
        color="#F4B5A4"
        onPress={() => navigation.navigate('Wishlist')}
      />
      <Octicons
        name="person"
        size={23}
        color="#F4B5A4"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Navbar;
