import {RefreshControl, Text, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React from 'react';

import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import Input from '../../components/molecules/input/Input';
import DateInput from '../../components/molecules/dateInput/DateInput';
import {styles} from './EditProfileStyles';
import Button from '../../components/molecules/button/Button';
import {useEditProfile} from './useEditProfile';
import {editProfileInputs} from '../../constants/inputs';
import Img from '../../components/img/Img';
import {black} from '../../constants/colors';

const EditProfile = () => {
  const {
    data,
    handleChange,
    photo,
    handleChoosePhoto,
    id,
    handleUpdate,
    refreshing,
    onRefresh,
  } = useEditProfile();
  const inputs = editProfileInputs(data);
  const name = data.name;

  return (
    <ComponentWrapper
      text="My Profile"
      filter={false}
      wishlist={null}
      refresh={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <>
        <View style={styles.imgSection}>
          <View>
            <Img photo={photo} img={styles.img} />
            <View style={styles.iconWrap}>
              <EvilIcons
                name="camera"
                size={25}
                color={black}
                onPress={handleChoosePhoto}
              />
            </View>
          </View>
          <View style={styles.nameSection}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.id}>ID: {id}</Text>
          </View>
        </View>
        <View style={{width: '100%'}}>
          {inputs.map(input => (
            <Input
              key={input.id}
              value={input.value}
              onChange={text => handleChange(input.name, text)}
              title={input.title}
              placeholder={input.placeholder}
              marginTop={input.marginTop}
            />
          ))}
          <DateInput
            marginTop={14}
            value={new Date(data.dateOfBirth)}
            onChange={date => handleChange('dateOfBirth', date.toISOString())}
          />
        </View>
        <Button
          text="Update Profile"
          marginTop={52}
          marginBottom={31}
          onPress={handleUpdate}
        />
      </>
    </ComponentWrapper>
  );
};

export default EditProfile;
