import {Text, View} from 'react-native';
import React from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './HeaderStyles';

const Header = ({text}: {text: string}) => {
  const navigation = useTypeNavigation();
  return (
    <View style={styles.wrapper}>
      <Feather
        name="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
        color={'black'}
      />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.empty} />
    </View>
  );
};

export default Header;
