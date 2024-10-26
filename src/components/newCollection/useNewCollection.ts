import {useEffect} from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getNew} from '../../store/slices/items.slice';

export const useNewCollection = () => {
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.items.topItems);
  const states = useAppSelector(state=>state.items.newCollection);
  useEffect(() => {
    (async () => {
      await dispatch(getNew());
    })();
  }, []);
  const gotoAll = () => {
    states && navigation.navigate('ItemsPage', {name: 'New Collection', items:states});
  };
  return {items, gotoAll};
};
