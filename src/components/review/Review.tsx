import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './ReviewStyles';
import Img from '../img/Img';

const Review = ({
  picture,
  name,
  comment,
}: {
  picture: string | null;
  name: string;
  comment: string;
}) => {
  return (
    <View style={styles.reviewWrap}>
      <View style={styles.imgWrap}>
        <Img img={styles.img} photo={picture} />
        <Text style={styles.imgText}>{name}</Text>
      </View>
      <Text style={styles.comment}>{comment}</Text>
      <View style={styles.seenWrap}>
        <View style={styles.seen}>
          <Image source={require('../../assets/icons/eyecon.png')} />
          <Text style={styles.text}>520</Text>
        </View>
        <View style={styles.like}>
          <Image source={require('../../assets/icons/star.png')} />
          <Text style={styles.text}>343</Text>
        </View>
      </View>
    </View>
  );
};

export default Review;
