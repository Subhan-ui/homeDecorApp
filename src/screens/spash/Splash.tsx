import {Image, Text, View} from 'react-native';
import {styles} from './SpashStyles';
import { useSplash } from './useSplash';

const Splash = () => {
    useSplash();
  return (
    <View style={styles.wrap}>
      <Image
        source={require('../../assets/icons/logoWhite.png')}
        style={styles.img}
      />
      <Text style={styles.logoTextU}>HOME</Text>
      <Text style={styles.logoTextL}>DECOR</Text>
    </View>
  );
};

export default Splash;
