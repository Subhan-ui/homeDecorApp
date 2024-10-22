import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './OrderItemStyles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { lightCamel } from '../../constants/colors';

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
}: {
  id: string;
  status: string;
  date: string;
  picture: string;
  head: string;
  desc: string;
  price: number;
  quantity: number;
  total: number;
  handleConfirm: () => void;
}) => {
  function formatDate(isoString: string): string {
    const date = new Date(isoString);

    const day = date.getDate();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const month = monthNames[date.getMonth()];

    return `${month} ${day}`;
  }
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
