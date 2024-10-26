import {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getItems} from '../../store/slices/items.slice';
import {RouteProp, useRoute} from '@react-navigation/native';
import {itemsType, navigatorTypes} from '../../types/types';

type SetItemRoute = RouteProp<navigatorTypes, 'ItemsPage'>;

export const setItemsPage = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<SetItemRoute>();
  const parameters = route.params;
  const states = useAppSelector(state => state.items);
  const [items, setItems] = useState<itemsType[]>([]);
  const [name, setName] = useState<string>('');
  const [data, setData] = useState<string>('Loading...');
  const [ok, setOk] = useState(false);
  useEffect(() => {
    (async () => {
      (await dispatch(getItems())).payload;
    })();
    if (parameters) {
      setItems(parameters.items);
      setName(parameters.name);
    } else if (states.items) {
      setItems(states.items);
      setName('Items');
    }
  }, []);
  useEffect(() => {
    checkTrue();
  }, [states.status]);
  const checkTrue = () => {
    if (
      states.items &&
      states.items.length > 0 &&
      states.status === 'succeeded' &&
      states.error === null
    ) {
      setOk(true);
      setData('');
    } else if (states.status === 'failed' && states.error !== null) {
      setOk(false);
      setData(states.error);
    } else if (states.status === 'loading') {
      setOk(false);
      setData('Loading...');
    }
  };
  return {ok, data, items, name};
};
