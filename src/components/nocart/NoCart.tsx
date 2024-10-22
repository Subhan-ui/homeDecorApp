import {Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './NoCartStyles';

const NoCart = ({where}: {where: 'Cart' | 'Wishlist'}) => {
  const [img, setImg] = useState(require('../../assets/icons/cart.png'));
  useEffect(() => {
    if (where === 'Cart') {
      setImg(require('../../assets/icons/cart.png'));
    } else {
      setImg(require('../../assets/icons/wishlist.png'));
    }
  });
  return (
    <View style={styles.wrap}>
      <Image source={img} />
      <Text style={styles.text}>There are no items in your {where}.</Text>
    </View>
  );
};

export default NoCart;
