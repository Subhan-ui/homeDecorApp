import {Image, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './InputStyles';
import { linen, peach } from '../../../constants/colors';

const Input = ({
  eye = false,
  title,
  placeholder,
  marginTop,
  color = false,
  value,
  onChange,
}: {
  title: string;
  placeholder: string;
  onChange: (text: string) => void;
  value: string;
  eye?: boolean;
  marginTop?: number;
  color?: boolean;
  name?: string;
}) => {
  return (
    <View style={[styles.wrap, {marginTop}]}>
      <View style={{width: '92%'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput
          value={value}
          onChangeText={text => onChange(text)}
          style={[styles.input, {backgroundColor: color ? 'white' : linen}]}
          placeholder={placeholder}
          keyboardType={
            title === 'Email'
              ? 'email-address'
              : title === 'Mobile Number'
              ? 'phone-pad'
              : 'default'
          }
          placeholderTextColor={peach}
          secureTextEntry={eye}
        />
        {eye && (
          <Image
            source={require('../../../assets/icons/eye.png')}
            style={styles.eye}
          />
        )}
      </View>
    </View>
  );
};

export default Input;
