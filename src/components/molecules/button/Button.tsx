import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './ButtonStyles';

const Button = ({
  text,
  marginTop,
  onPress,
  marginBottom,
  color = false,
}: {
  text: string;
  marginTop: number;
  onPress?: () => void;
  marginBottom?: number;
  color?: boolean;
}) => {
  const backgroundColor = color ? '#FAF0E6' : '#F4B5A4';
  const textColor = color ? '#DCBEB6' : '#CC7861';
  return (
    <View style={[styles.wrap, {marginBottom}]}>
      <Pressable
        style={[styles.btn, {marginTop, backgroundColor}]}
        onPress={onPress}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
