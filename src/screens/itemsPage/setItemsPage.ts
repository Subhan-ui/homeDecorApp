import {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getItems} from '../../store/slices/items.slice';

export const setItemsPage = () => {
  const dispatch = useAppDispatch();
  const states = useAppSelector(state => state.items);
  const [data, setData] = useState<string>('Loading...');
  const [ok, setOk] = useState(false);
  useEffect(() => {
    (async () => {
      (await dispatch(getItems())).payload;
    })();
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
  return {ok, data, items: states.items};
};
