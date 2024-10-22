import {ToastAndroid} from 'react-native';

import {useAppDispatch} from '../../store/hook';
import {deleteFavourite} from '../../store/slices/favourite.slice';

export const useWishCard = () => {
  const dispatch = useAppDispatch();
  const removeFav = async (id: string) => {
    try {
      const response = await dispatch(deleteFavourite(id));
      ToastAndroid.show('Removed from wishlist', ToastAndroid.SHORT);
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  return {removeFav};
};
