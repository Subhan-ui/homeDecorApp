import {Image, Text, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {styles} from './OrderItemStyles';
import {lightCamel} from '../../constants/colors';
import {orderItemType} from '../../types/types';
import {useOrderItem} from './useOrderItem';

const OrderItem = ({
  status,
  date,
  picture,
  head,
  desc,
  price,
  quantity,
  total,
  id,
  handleConfirm,
}: orderItemType) => {
  const {formatDate} = useOrderItem();
  return (
    <View style={{gap: 3}}>
      <View style={styles.orderWrap}>
        <Text style={styles.orderStatus}>Order: {status}</Text>
        <Text style={styles.orderStatus}>{formatDate(date)}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.wrap}>
        <Image source={{uri: picture}} style={styles.img} />
        <View style={styles.sb}>
          <View style={styles.row}>
            <View>
              <Text style={styles.heading}>{head}</Text>
              <Text style={styles.desc}>{desc}</Text>
            </View>

            <View style={styles.imgWrap}>
              <View style={styles.delWrap}>
                <EvilIcons
                  name="trash"
                  size={14}
                  color={lightCamel}
                  onPress={handleConfirm}
                />
              </View>
              <Image source={require('../../assets/icons/add.png')} />
            </View>
          </View>

          <View style={styles.priceWrap}>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.price}>{quantity}x uds.</Text>
            <Text style={styles.price}>Total: ${total}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
