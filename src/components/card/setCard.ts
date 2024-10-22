import {ToastAndroid} from 'react-native';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {useAppDispatch} from '../../store/hook';
import {addFavourite} from '../../store/slices/favourite.slice';

export const setCard = () => {
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const goToDetail = ({
    name,
    description,
    price,
    picture,
    id,
  }: {
    marginBottom?: number;
    name: string;
    description: string;
    price: number;
    picture: string;
    id: string;
  }) => {
    navigation.navigate('CardDetail', {
      name,
      description,
      price,
      picture,
      id,
    });
  };
  function limitWords(text: string | undefined) {
    if (!text) {
      return undefined;
    }
    const words = text.split(' ');
    if (words.length <= 10) {
      return text;
    }
    const truncatedText = words.slice(0, 10).join(' ');
    return `${truncatedText}...`;
  }
  const addFavourites = async (id: string) => {
    try {
      await dispatch(addFavourite(id));
      ToastAndroid.show(
        'the item added to your favourites.',
        ToastAndroid.SHORT,
      );
    } catch (error: any) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };
  return {limitWords, goToDetail, addFavourites};
};
