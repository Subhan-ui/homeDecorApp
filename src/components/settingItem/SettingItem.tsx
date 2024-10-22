import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './SettingItemStyle';

const SettingItem = ({
  text,
  children,
  onClick,
}: {
  text: string;
  children: JSX.Element;
  onClick?: () => void;
}) => {
  return (
    <Pressable onPress={onClick} style={styles.btnWrap}>
      <View style={styles.iconWrap}>
        <View style={styles.textWrap}>{children}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <AntDesign name="down" size={13} color="#363130" />
    </Pressable>
  );
};

export default SettingItem;
