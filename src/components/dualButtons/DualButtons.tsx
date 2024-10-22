import {View, Text, Pressable} from 'react-native';
import React from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './DualButtonStyles';
import { darkCamel, lightCamel, linen, peach } from '../../constants/colors';

const DualButtons = ({to}: {to: 'Checkout' | 'DeliveryTime'}) => {
  const navigation = useTypeNavigation();
  return (
    <View style={styles.btnWrap}>
      <Pressable
        style={[styles.btn, {backgroundColor: linen}]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.text, {color: peach}]}>Return Home</Text>
      </Pressable>
      <Pressable
        style={[styles.btn, {backgroundColor: lightCamel}]}
        onPress={() => navigation.navigate(to)}>
        <Text style={[styles.text, {color: darkCamel}]}>
          {to === 'Checkout' ? 'Try again' : 'Track Order'}
        </Text>
      </Pressable>
    </View>
  );
};

export default DualButtons;
