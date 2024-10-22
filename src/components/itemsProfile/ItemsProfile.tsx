import {Pressable, Text, View} from 'react-native';

import {styles} from './ItemsProfileStyles';
import {ItemsProfileType} from '../../types/types';

const ItemsProfile = ({children, text, onPress}: ItemsProfileType) => {
  return (
    <Pressable onPress={onPress} style={styles.wrap}>
      <View style={styles.children}>{children}</View>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ItemsProfile;
