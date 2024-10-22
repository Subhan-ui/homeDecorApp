import {useCallback, useEffect, useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hook';
import {orderType} from '../../types/types';
import {getUserData} from '../../store/slices/auth.slice';
import {cancelOrder, deleteOrder} from '../../store/slices/order.slice';

export const useOrder = () => {
  const userData = useAppSelector(state => state.auth.userData?.orders);
  const [data, setData] = useState<orderType[]>([]);
  const [ok, setOk] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const res = await dispatch(getUserData());
    if (res) {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (userData?.length === 0) {
      setData(userData);
      setOk(true);
    } else {
      setOk(false);
    }
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await dispatch(deleteOrder(id));
      if (response.meta.requestStatus === 'fulfilled') {
        onRefresh();
        ToastAndroid.show('Order Deleted Successfully', ToastAndroid.SHORT);
        return;
      }
      if (response.meta.requestStatus === 'rejected') {
        ToastAndroid.show(response.payload, ToastAndroid.SHORT);
        return;
      }
    } catch (error) {
      ToastAndroid.show(error as string, ToastAndroid.LONG);
    }
  };

  const handleCancel = async (id: string) => {
    try {
      const response = await dispatch(cancelOrder(id));
      if (response.meta.requestStatus === 'fulfilled') {
        onRefresh();
        ToastAndroid.show('Order Cancelled Successfully', ToastAndroid.SHORT);
        return;
      }
      if (response.meta.requestStatus === 'rejected') {
        ToastAndroid.show(response.payload, ToastAndroid.SHORT);
        return;
      }
    } catch (error) {
      ToastAndroid.show(error as string, ToastAndroid.LONG);
    }
  };

  const handleConfirm = async (id: string) => {
    Alert.alert(
      'What do you want to do?',
      'Do you want to delete the order or cancel the order?',
      [
        {
          text: 'Go Back',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            handleDelete(id);
          },
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => {
            handleCancel(id);
          },
          style: 'cancel',
        },
      ],
    );
  };
  return {ok, data, refreshing, onRefresh, handleConfirm};
};
