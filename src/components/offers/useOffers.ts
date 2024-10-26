import {useEffect, useState} from 'react';
import {itemsType} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getPopular} from '../../store/slices/items.slice';

export const useOffers = () => {
  const [popular, setPopular] = useState<itemsType[]>([]);
  const items = useAppSelector(state => state.items.popular);
  const dispatch = useAppDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);

  useEffect(() => {
    if (items && items.length > 1) {
      const topItems = items.slice(0, 4);
      setPopular(topItems);
    } else {
      setPopular([]);
    }
  }, [items]);

  useEffect(() => {
    if (popular.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % popular.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [popular.length]);

  return {popular, activeIndex};
};
