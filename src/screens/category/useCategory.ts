import {useEffect, useState} from 'react';
import {categoryType} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getCategories} from '../../store/slices/items.slice';
import useTypeNavigation from '../../navigation/useTypeNavigation';

export const useCategory = () => {
  const [data, setData] = useState<categoryType[]>([]);
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.items.categories);
  const navigation = useTypeNavigation();
  useEffect(() => {
    (async () => {
      const res = await dispatch(getCategories());
    })();
  }, []);
  useEffect(() => {
    if (items) {
      setData(items);
    }
  }, [items]);

  const goToSubCategory = (id: string) => {
    const subCat = data.find(cat => cat.id === id);

    subCat &&
      navigation.navigate('SubCategory', {
        id: subCat.id,
        name: subCat.name,
        data: subCat.subCategories,
      });
  };
  return {data, goToSubCategory};
};
