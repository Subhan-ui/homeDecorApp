import {useCallback, useState} from 'react';
import {ToastAndroid} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hook';
import {makeOrder} from '../../store/slices/order.slice';
import {getUserData} from '../../store/slices/auth.slice';
import useTypeNavigation from '../../navigation/useTypeNavigation';

export const useCheckout = () => {
  const userData = useAppSelector(state => state.auth.userData);
  const orders = useAppSelector(state => state.order.order || []);
  const total = useAppSelector(state => state.order.total || 0);
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const makingOrder = async (id: string | undefined) => {
    try {
      if (!id) {
        ToastAndroid.show('No order placed', ToastAndroid.LONG);
        return;
      }
      if (!userData?.address) {
        ToastAndroid.show(
          'You need to add your address first',
          ToastAndroid.LONG,
        );
        return;
      }
      const res = await dispatch(makeOrder(id));
      if (res.meta.requestStatus === 'fulfilled') {
        ToastAndroid.show('Order Placed Successfully', ToastAndroid.LONG);
        navigation.navigate('SuccessPayment');
        return;
      }
      if (res.meta.requestStatus === 'rejected') {
        ToastAndroid.show(res.meta.arg, ToastAndroid.LONG);
        navigation.navigate('FailurePayment');
        return;
      }
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const res = await dispatch(getUserData());
    if (res) {
      setRefreshing(false);
    }
  }, []);
  const address = userData?.address
    ? `${userData?.address?.country}, ${userData?.address?.city}, ${userData?.address?.state}, ${userData?.address?.street}, ${userData?.address?.postalCode}`
    : 'Add Your Address here';

  return {userData, address, orders, total, refreshing, onRefresh, makingOrder};
};
