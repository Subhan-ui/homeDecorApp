import {Image, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './WishlistCardStyles';
import {useWishCard} from './useWishCard';
import {lightCamel} from '../../constants/colors';
import {wishlistCardType} from '../../types/types';

const WishlistCard = ({id, name, price, picture}: wishlistCardType) => {
  const {removeFav} = useWishCard();
  return (
    <>
      <View style={styles.sb}>
        <View style={styles.wrap}>
          <Image source={{uri: picture}} style={styles.img} />
          <View style={styles.textWrap}>
            <View style={styles.h1Wrap}>
              <Text style={styles.h1}>{name}</Text>
              <View style={styles.iconWrap}>
                <MaterialIcons
                  name="delete-outline"
                  size={11}
                  color={lightCamel}
                  onPress={() => removeFav(id)}
                />
              </View>
            </View>
            <Text style={styles.p}>{price}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default WishlistCard;
