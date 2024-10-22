import {useEffect, useState} from 'react';
import {updateUserType} from '../../types/types';
import {ToastAndroid} from 'react-native';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getUserData, updateUser} from '../../store/slices/auth.slice';
import useTypeNavigation from '../../navigation/useTypeNavigation';

export const useEditProfile = () => {
  const [data, setData] = useState<updateUserType>({
    picture: '',
    name: '',
    dateOfBirth: new Date().toISOString(),
    mobileNumber: '',
    email: '',
  });
  const [namepic, setName] = useState<string>('');
  const userData = useAppSelector(state => state.auth.userData);
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    const res = await dispatch(getUserData());
    if(res){
        setRefreshing(false)
    }
  };
  useEffect(() => {
    if (userData) {
      const date = Number(userData.dateOfBirth);
      const newDate = new Date(date).toISOString();
      setData({
        name: userData.name,
        dateOfBirth: newDate,
        mobileNumber: userData.mobileNumber,
        email: userData.email,
        picture: userData.profilePicture ||'',
      });
    }
  }, []);
  const [loading, setLoading] = useState<boolean>(false);
  const uploadImage = async () => {
    if (namepic && data.picture) {
      const reference = storage().ref(namepic);
      const pathToFile = data.picture;

      console.log('path->>>',typeof pathToFile)
      const res = await reference.putFile(pathToFile);
      console.log('res---->' , res)
    }
  };
  const handleChoosePhoto = async () => {
    try {
      setLoading(true);
      launchImageLibrary(
        {mediaType: 'photo'},
        (response: ImagePickerResponse) => {
          if (response?.didCancel) {
            ToastAndroid.show('User cancelled image picker', ToastAndroid.LONG);
          } else if (response?.errorMessage) {
            ToastAndroid.show(
              `Image picker error: ${response?.errorMessage}`,
              ToastAndroid.LONG,
            );
          } else {
            console.log('response->>>>>   ', response)
            let imageUri = response?.assets?.[0]?.uri;
            let imageName = response?.assets?.[0]?.fileName;
            if (imageUri && imageName) {
              setData(prev => ({
                ...prev,
                picture: imageUri,
              }));
              setName(imageName);
            }
          }
        },
      );
    } catch (err) {
      ToastAndroid.show('Some error occured', ToastAndroid.LONG);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const {name, dateOfBirth, mobileNumber, email} = data;
    if (
      name === '' ||
      dateOfBirth === '' ||
      mobileNumber === '' ||
      email !== userData?.email
    ) {
      ToastAndroid.show(
        'You can not make any field empty.',
        ToastAndroid.SHORT,
      );
      return;
    }
    try {
      let url: string | null = null;
      if (namepic && data.picture) {
        await uploadImage();
        url = await storage().ref(namepic).getDownloadURL();
    }
    if(url){
    setData(prev => ({
        ...prev,
        picture: url ||'',
    }));
    console.log('url->>>>', data.picture);
      
      const res = await dispatch(updateUser({
        name,
        picture: url,
        dateOfBirth,
        mobileNumber,
        email,
      }));
      console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        ToastAndroid.show('Profile Updated Successfully', ToastAndroid.LONG);
        navigation.navigate('Home');
        return;
      }
      ToastAndroid.show('There might be some error here', ToastAndroid.SHORT);
    }
    } catch (error) {
      ToastAndroid.show('error'+error as string, ToastAndroid.SHORT);
    }
  };
  return {
    data,
    handleChange,
    refreshing, 
    onRefresh,
    photo: data.picture,
    handleChoosePhoto,
    id: userData?.id,
    handleUpdate,
  };
};
