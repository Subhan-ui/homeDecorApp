import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import { getCategoryWiseItems } from "../../store/slices/items.slice";
import { itemsType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import useTypeNavigation from "../../navigation/useTypeNavigation";

export const useSubCategory = (name: string) => {
    const dispatch = useAppDispatch();
    const navigation = useTypeNavigation();
    const states = useAppSelector(state => state.items);
    const [data, setData] = useState<itemsType[]>([]);
  
    const onClickSub = async (categoryId: string, subCategoryId: string) => {
      const res = await dispatch(getCategoryWiseItems({ categoryId, subCategoryId }));
      if (res.meta.requestStatus === 'fulfilled' && res.payload) {
        setData(res.payload);
      } else {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
      }
    };
  
    useEffect(() => {
      if (data.length > 0) {
        navigation.navigate('ItemsPage', { name, items: data });
      }
    }, [data, name, navigation]);
  
    return { onClickSub };
  };
  