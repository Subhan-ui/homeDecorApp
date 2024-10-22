import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './StarRatingStyles';
import {Rating} from '../../types/types';
import {getStarsCount} from './useStarRating';

const starImage = require('../../assets/icons/star.png');

const StarRating: React.FC<{rating: Rating}> = ({rating}) => {
  const starsCount = getStarsCount(rating);

  return (
    <View style={styles.container}>
      {Array.from({length: starsCount}, (_, index) => (
        <Image key={index} source={starImage} style={styles.star} />
      ))}
    </View>
  );
};

export default StarRating;
