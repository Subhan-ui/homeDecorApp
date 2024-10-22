import {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getFavourites} from '../../store/slices/favourite.slice';

export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const states = useAppSelector(state => state.favourite);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await dispatch(getFavourites());
    })();
  }, []);
  useEffect(() => {
    checkTrue();
  }, [states.status]);

  const checkTrue = () => {
    if (
      states.favourites &&
      states.favourites.length > 0 &&
      states.status === 'succeeded' &&
      states.error === null
    ) {
      setLoading(true);
    } else if (states.status === 'failed' && states.error !== null) {
      setLoading(false);
    } else if (states.status === 'loading') {
      setLoading(true);
    }
  };
  return {items: states.favourites, loading};
};
