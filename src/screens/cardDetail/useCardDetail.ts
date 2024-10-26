import {ToastAndroid} from 'react-native';
import {useState} from 'react';

import {useAppDispatch} from '../../store/hook';
import {addFavourite} from '../../store/slices/favourite.slice';
import {addOrderItem} from '../../store/slices/order.slice';
import {addReviews} from '../../store/slices/review.slice';
import {Rating} from '../../types/types';

export const useCardDetail = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState<{comment: string; rating: Rating}>({
    comment: '',
    rating: 'GOOD',
  });
  const changeValues = (name: string, value: string) => {
    setData(prev => ({...prev, [name]: value}));
  };
  const addFavourites = async (id: string) => {
    try {
      await dispatch(addFavourite(id));
      ToastAndroid.show(
        'the item added to your favourites.',
        ToastAndroid.SHORT,
      );
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  const addToCart = async (id: string) => {
    try {
      const response = await dispatch(addOrderItem({id, quantity: 1}));
      console.log(response);
      ToastAndroid.show('Item added to Cart.', ToastAndroid.SHORT);
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  const addReview = async (id: string) => {
    try {
      const response = await dispatch(addReviews({id, ...data}));
      ToastAndroid.show('Review added.', ToastAndroid.SHORT);
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  return {
    addFavourites,
    addToCart,
    isVisible,
    setIsVisible,
    changeValues,
    addReview,
    data,
  };
};
