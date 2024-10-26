import {Image, Text, View} from 'react-native';
import React from 'react';

import {styles} from './OffersPicStyles';

const OffersPic = ({
  name,
  price,
  picture,
}: {
  name: string;
  price: number;
  picture: string;
}) => {
  return (
    <View style={styles.wrap}>
      <Image source={{uri: picture}} style={styles.img} />
      <View style={styles.trapezoid} />
      <View style={styles.topTextWrap}>
        <Text style={styles.h1}>Popular Items</Text>
        <View style={styles.belowTextWrap}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Price: ${price}</Text>
        </View>
      </View>
    </View>
  );
};

export default OffersPic;
