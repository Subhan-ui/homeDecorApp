import {ToastAndroid} from 'react-native';

import {useAppDispatch} from '../../store/hook';
import {addOrderItem, removeOrderItem} from '../../store/slices/order.slice';

export const useCartItem = () => {
  const dispatch = useAppDispatch();
  const addSingleItem = async (id: string) => {
    try {
      const res = await dispatch(addOrderItem({id, quantity: 1}));
      ToastAndroid.show(
        `Refresh to see changes: ${res.payload}`,
        ToastAndroid.LONG,
      );
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  const removeSingleItem = async (id: string) => {
    try {
      const res = await dispatch(removeOrderItem(id));
      ToastAndroid.show(
        `Refresh to see changes: ${res.payload}`,
        ToastAndroid.LONG,
      );
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  return {addSingleItem, removeSingleItem};
};
