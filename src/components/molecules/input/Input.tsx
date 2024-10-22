import {Image, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './InputStyles';

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
          style={[styles.input, {backgroundColor: color ? 'white' : '#FAF0E6'}]}
          placeholder={placeholder}
          keyboardType={
            title === 'Email'
              ? 'email-address'
              : title === 'Mobile Number'
              ? 'phone-pad'
              : 'default'
          }
          placeholderTextColor="#DCBEB6"
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
