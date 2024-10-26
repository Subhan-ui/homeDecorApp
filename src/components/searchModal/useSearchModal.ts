import {useState} from 'react';
import {useAppDispatch} from '../../store/hook';
import {ToastAndroid} from 'react-native';
import {searchItems} from '../../store/slices/items.slice';

export const useSearchModal = (close: () => void) => {
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (texts: string) => {
    setText(texts);
  };

  const handleSubmit = async (some: string) => {
    if (some.trim() === '') {
      ToastAndroid.show('Please enter something', ToastAndroid.SHORT);
      return;
    }
    try {
      const response = await dispatch(searchItems(some));
      console.log(response);
      close();
      ToastAndroid.show('Searched successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error as string);
    } finally {
      setText('');
    }
  };
  return {text, handleChange, handleSubmit};
};
