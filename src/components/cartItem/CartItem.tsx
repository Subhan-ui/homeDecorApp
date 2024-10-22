import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {styles} from './CartItemStyles';
import {useCartItem} from './useCartItem';
import {darkCamel} from '../../constants/colors';
import {cartItemType} from '../../types/types';

const CartItem = ({
  picture,
  id,
  name,
  price,
  quantity,
  itemId,
}: cartItemType) => {
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
              color={darkCamel}
              style={styles.minus}
              onPress={() => removeSingleItem(itemId)}
            />
            <Text>{quantity}</Text>
            <Icon
              name="plus"
              size={12}
              color={darkCamel}
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
