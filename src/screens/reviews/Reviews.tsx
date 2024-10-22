import {Text, View} from 'react-native';
import React from 'react';
import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import Review from '../../components/review/Review';
import {styles} from './ReviewStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {navigatorTypes} from '../../types/types';
import {useReview} from './useReview';

type ReviewRouteType = RouteProp<navigatorTypes, 'Reviews'>;

const Reviews = () => {
  const route = useRoute<ReviewRouteType>();
  const {id} = route.params;
  const {reviews} = useReview(id);
  return (
    <ComponentWrapper text="User Reviews">
      {reviews && reviews.length > 0 ? (
        <>
          <View style={styles.wrap}>
            <Text style={styles.text}>{reviews?.length} Reviews</Text>
            <Text style={styles.text}>See All</Text>
          </View>
          <View style={{gap: 20}}>
            {reviews?.map(review => (
              <Review
                picture={review?.user?.profilePicture}
                key={review.id}
                name={review?.user?.name}
                comment={review.comment}
              />
            ))}
          </View>
        </>
      ) : (
        <View style={styles.textWrap}>
          <Text style={styles.text}>No Reviews for this product</Text>
        </View>
      )}
    </ComponentWrapper>
  );
};

export default Reviews;
