import {useCallback, useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {addressType} from '../../types/types';
import {useAppDispatch} from '../../store/hook';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {getUserData} from '../../store/slices/auth.slice';
import {
  addAddress,
  deleteAddress,
  getAddress,
  updateAddress,
} from '../../store/slices/address.slice';

export const useAddress = () => {
  const [data, setData] = useState<addressType>({
    country: '',
    city: '',
    state: '',
    postalCode: '',
    street: '',
  });
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const [initialFetched, setInitialFetched] = useState(false);
  const [title, setTitle] = useState<'Update' | 'Add'>('Add');

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const response = (await dispatch(getAddress())).payload;
        if (!response || Object.keys(response).length === 0 || !response.city) {
          resetData();
        } else {
          setTitle('Update');
          setData(response as addressType);
        }
        setInitialFetched(true);
      };
      fetchData();
      return () => {
        resetData();
        setInitialFetched(false);
      };
    }, [dispatch]),
  );
  const resetData = () => {
    setData({
      country: '',
      city: '',
      state: '',
      postalCode: '',
      street: '',
    });
    setTitle('Add');
  };
  const handleChange = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const {country, city, state, postalCode, street} = data;
    if (
      country === '' ||
      city === '' ||
      state === '' ||
      postalCode === '' ||
      street === ''
    ) {
      Alert.alert('Error', 'Please enter all the fields');
      return;
    }
    try {
      const response = await dispatch(updateAddress(data));
      resetData();
      navigation.navigate('Home');
      ToastAndroid.show('Address updated successfully', ToastAndroid.SHORT);
      await dispatch(getUserData());
    } catch (error) {
      Alert.alert('error', error as string);
    }
  };
  const handleSubmit = async () => {
    const {country, city, state, postalCode, street} = data;
    if (
      country === '' ||
      city === '' ||
      state === '' ||
      postalCode === '' ||
      street === ''
    ) {
      Alert.alert('Error', 'Please enter all the fields');
      return;
    }
    try {
      const response = await dispatch(addAddress(data));
      resetData();

      navigation.navigate('Home');
      ToastAndroid.show('Address added successfully', ToastAndroid.SHORT);
      await dispatch(getUserData());
    } catch (error) {
      Alert.alert('error', error as string);
    }
  };
  const handleDelete = async () => {
    Alert.alert(
      'Are You sure',
      'Are you sure, you want to delete your address',
      [
        {
          text: 'Yes',
          onPress: async () => {
            try {
              const response = await dispatch(deleteAddress());
              navigation.navigate('Home');
              resetData();
              ToastAndroid.show('Address Deleted', ToastAndroid.SHORT);
            } catch (error: any) {
              ToastAndroid.show(error.message, ToastAndroid.SHORT);
            }
          },
        },
        {
          text: 'No',
          onPress: () => {
            navigation.navigate('Settings');
          },
        },
      ],
    );
  };
  return {
    data,
    handleChange,
    handleSubmit,
    handleUpdate,
    handleDelete,
    title,
    initialFetched,
  };
};
