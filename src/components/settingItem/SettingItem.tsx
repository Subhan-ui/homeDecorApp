import {Pressable, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './SettingItemStyle';
import {darkBrown} from '../../constants/colors';
import {settingItemType} from '../../types/types';

const SettingItem = ({text, children, onClick}: settingItemType) => {
  return (
    <Pressable onPress={onClick} style={styles.btnWrap}>
      <View style={styles.iconWrap}>
        <View style={styles.textWrap}>{children}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <AntDesign name="down" size={13} color={darkBrown} />
    </Pressable>
  );
};

export default SettingItem;
