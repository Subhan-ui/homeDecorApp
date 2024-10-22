import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './HeaderStyles';
import {headerType} from '../../types/types';

const Header = ({text}: headerType) => {
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
