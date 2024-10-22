import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './StarRatingStyles';

type Rating = 'WORST' | 'BAD' | 'NORMAL' | 'GOOD' | 'BEST';

interface StarRatingProps {
  rating: Rating;
}

const starImage = require('../../assets/icons/star.png');

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
  const getStarsCount = (rating: Rating): number => {
    switch (rating) {
      case 'WORST':
        return 1;
      case 'BAD':
        return 2;
      case 'NORMAL':
        return 3;
      case 'GOOD':
        return 4;
      case 'BEST':
        return 5;
      default:
        return 0;
    }
  };

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
