import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {orderType} from '../../types/types';
import {getOrder, setTotal} from '../../store/slices/order.slice';
import useTypeNavigation from '../../navigation/useTypeNavigation';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const states = useAppSelector(state => state.order);
  const [data, setData] = useState<orderType>();
  const navigation = useTypeNavigation();
  const [ok, setOk] = useState(false);
  useEffect(() => {
    (async () => {
      await dispatch(getOrder());
    })();
  }, []);
  useEffect(() => {
    checkTrue();
    const items = states.order.find(item => item.status === 'PENDING');
    if (items) {
      setData(items);
    }
  }, [states.status]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const res = await dispatch(getOrder());
    if (res) {
      setRefreshing(false);
    }
  }, []);

  const handleCheckout = async () => {
    dispatch(setTotal(total));
    navigation.navigate('Checkout');
  };

  const checkTrue = () => {
    if (
      states.order &&
      states.order.length > 0 &&
      states.status === 'succeeded' &&
      states.error === null
    ) {
      setOk(true);
    } else if (states.status === 'failed' && states.error !== null) {
      setOk(false);
    } else if (states.status === 'loading') {
      setOk(true);
    } else {
      setOk(false);
    }
  };
  const price = data?.totalPrice || 0;
  const tax = price * 0.1;
  const deliver = 8;
  const total = price + tax + deliver;

  const items = [
    {id: 1, h1: 'Subtotal', p: `$${price.toFixed(2)}`},
    {id: 2, h1: 'Tax and Fees', p: `$${tax.toFixed(2)}`},
    {id: 3, h1: 'Deliver', p: `$${deliver}`},
  ];
  return {data, ok, total, items, handleCheckout, onRefresh, refreshing};
};
