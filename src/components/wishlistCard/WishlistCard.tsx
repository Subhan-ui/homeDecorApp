import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './WishlistCardStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useWishCard} from './useWishCard';

const WishlistCard = ({
  id,
  name,
  price,
  picture,
}: {
  id: string;
  name: string;
  price: number;
  picture: string;
}) => {
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
                  color="#F4B5A4"
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
