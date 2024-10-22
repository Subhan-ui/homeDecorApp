import {Image, Pressable, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './CardStyles';
import {setCard} from './setCard';
import {cardType} from '../../types/types';

const Card = (props: cardType) => {
  const {marginBottom = 0, name, description, price, picture, id} = props;
  const {goToDetail, limitWords, addFavourites} = setCard();
  return (
    <Pressable
      onPress={() => goToDetail(props)}
      style={[styles.container, {marginBottom}]}>
      <Image source={{uri: picture}} style={styles.fullW} height={142} />
      <View style={styles.paddingL}>
        <Text style={styles.h1}>{name}</Text>
        <Text style={styles.p}>{limitWords(description)}</Text>
        <View style={styles.line} />
        <View style={styles.wrapper}>
          <Text style={styles.priceText}>${price}</Text>
          <View style={styles.imageWrap}>
            <Image source={require('../../assets/icons/add.png')} />
            <View style={styles.icon}>
              <Entypo
                name="heart"
                size={15}
                color="white"
                style={{position: 'relative', top: 1}}
                onPress={() => addFavourites(id)}
              />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
