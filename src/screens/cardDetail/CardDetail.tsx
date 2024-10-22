import {Image, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import StarRating from '../../components/starRating/StarRating';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import Button from '../../components/molecules/button/Button';
import ReviewModal from '../../components/reviewModal/ReviewModal';
import {styles} from './CardDetailStyles';
import {navigatorTypes} from '../../types/types';
import {useCardDetail} from './useCardDetail';
import {lightCamel} from '../../constants/colors';

type CardDetailRouteProp = RouteProp<navigatorTypes, 'CardDetail'>;

const CardDetail = () => {
  const navigation = useTypeNavigation();
  const route = useRoute<CardDetailRouteProp>();
  const {
    addFavourites,
    addToCart,
    isVisible,
    setIsVisible,
    changeValues,
    data,
    addReview,
  } = useCardDetail();
  const {name, description, price, picture, id} = route.params;
  console.log(isVisible);
  return (
    <ComponentWrapper text={name}>
      <>
        <ReviewModal
          isVisible={isVisible}
          close={() => setIsVisible(false)}
          comment={data.comment}
          rating={data.rating}
          onChange={changeValues}
          addReview={() => addReview(id)}
        />
        <Image source={{uri: picture}} style={styles.img} />
        <View style={styles.mt}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.desc}>{description}</Text>
          <View style={styles.line} />
          <View style={styles.priceWrap}>
            <Text style={styles.price}>${price}</Text>
            <View style={styles.imgWrap}>
              <View style={styles.iconWrap}>
                <Entypo
                  name="heart"
                  size={15}
                  color="white"
                  style={{position: 'relative', top: 1}}
                  onPress={() => addFavourites(id)}
                />
              </View>
              <Entypo
                name="circle-with-plus"
                size={23}
                color={lightCamel}
                style={{position: 'relative', top: 1}}
                onPress={() => setIsVisible(true)}
              />
            </View>
          </View>
          <View style={styles.reviewWrap}>
            <Text
              style={styles.textReview}
              onPress={() => navigation.navigate('Reviews', {id})}>
              Users reviews
            </Text>
            <StarRating rating="BEST" />
          </View>
        </View>
        <Button
          text="Add to cart"
          marginTop={53}
          onPress={() => addToCart(id)}
        />
      </>
    </ComponentWrapper>
  );
};

export default CardDetail;
