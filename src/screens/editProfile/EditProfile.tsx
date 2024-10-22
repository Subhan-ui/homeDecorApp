import {Image, RefreshControl, Text, View} from 'react-native';
import React from 'react';
import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import Input from '../../components/molecules/input/Input';
import DateInput from '../../components/molecules/dateInput/DateInput';
import {styles} from './EditProfileStyles';
import Button from '../../components/molecules/button/Button';
import {useEditProfile} from './useEditProfile';
import {editProfileInputs} from '../../constants/inputs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Img from '../../components/img/Img';

const options = [
  {id: 1, text: 'Male'},
  {id: 2, text: 'Female'},
];

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
                color={'#4b4544'}
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
          {/* <View style={styles.genderSectionWrap}>
            <Text style={styles.optionText}>Gender</Text>
            <View style={styles.optionsWrap}>
              {options.map(option => (
                <View style={styles.options} key={option.id}>
                  <View style={styles.circle} />
                  <Text style={styles.optionText}>{option.text}</Text>
                </View>
              ))}
            </View>
          </View> */}
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
