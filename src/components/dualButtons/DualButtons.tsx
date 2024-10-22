import {View, Text, Pressable} from 'react-native';
import React from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './DualButtonStyles';

const DualButtons = ({to}: {to: 'Checkout' | 'DeliveryTime'}) => {
  const navigation = useTypeNavigation();
  return (
    <View style={styles.btnWrap}>
      <Pressable
        style={[styles.btn, {backgroundColor: '#FAF0E6'}]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.text, {color: '#dcbeb6'}]}>Return Home</Text>
      </Pressable>
      <Pressable
        style={[styles.btn, {backgroundColor: '#F4B5A4'}]}
        onPress={() => navigation.navigate(to)}>
        <Text style={[styles.text, {color: '#CC7861'}]}>
          {to === 'Checkout' ? 'Try again' : 'Track Order'}
        </Text>
      </Pressable>
    </View>
  );
};

export default DualButtons;
