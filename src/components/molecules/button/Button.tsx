import {Pressable, Text, View} from 'react-native';

import {styles} from './ButtonStyles';
import {darkCamel, lightCamel, linen, peach} from '../../../constants/colors';
import {buttonType} from '../../../types/types';

const Button = ({
  text,
  marginTop,
  onPress,
  marginBottom,
  color = false,
}: buttonType) => {
  const backgroundColor = color ? linen : lightCamel;
  const textColor = color ? peach : darkCamel;
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
