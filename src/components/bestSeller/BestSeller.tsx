import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './BestSellerStyles';

const BestSeller = () => {
  return (
    <View>
      <Text style={styles.heading}>Best Seller</Text>
      <View style={styles.box}>
        <View style={styles.wrapper}>
          <Text style={styles.h2}>Kitchen Cart</Text>
          <Text style={styles.p}>Lorem ipsum dolor sit amet.</Text>
          <View style={styles.btnWrap}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>4.5</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Shop Now</Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/icons/table.png')}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
};

export default BestSeller;
