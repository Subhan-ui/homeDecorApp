import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './ItemsProfileStyles';

const ItemsProfile = ({
  children,
  text,
  onPress,
}: {
  children: JSX.Element;
  text: string;
  onPress?: () => void;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.wrap}>
      <View style={styles.children}>{children}</View>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ItemsProfile;
