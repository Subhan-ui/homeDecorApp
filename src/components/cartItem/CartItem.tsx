import {Image, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {styles} from './CartItemStyles';
import {useCartItem} from './useCartItem';

const CartItem = ({
  picture,
  id,
  name,
  price,
  quantity,
  itemId,
}: {
  picture: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  itemId: string;
}) => {
  const {addSingleItem, removeSingleItem} = useCartItem();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerSM}>
          <Image source={{uri: picture}} style={styles.img} />
          <View style={styles.textWrap}>
            <Text style={styles.h5}>{name}</Text>
            <Text style={styles.h6}>${price}</Text>
          </View>
        </View>
        <View style={styles.quantityWrap}>
          <View style={styles.minusWrap}>
            <Icon
              name="minus"
              size={12}
              color="#cc7861"
              style={styles.minus}
              onPress={() => removeSingleItem(itemId)}
            />
            <Text>{quantity}</Text>
            <Icon
              name="plus"
              size={12}
              color="#cc7861"
              style={styles.minus}
              onPress={() => addSingleItem(id)}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default CartItem;
