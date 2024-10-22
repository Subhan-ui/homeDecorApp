import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';

import Header from '../../components/header/Header';
import Input from '../../components/molecules/input/Input';
import DateInput from '../../components/molecules/dateInput/DateInput';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './SignupStyles';
import Button from '../../components/molecules/button/Button';
import {useSignup} from './useSignup';
import {inputsfields} from '../../constants/inputs';

const Signup = () => {
  const navigation = useTypeNavigation();
  const {data, handleChange, handleSubmit} = useSignup();
  const {upper, lower} = inputsfields(data);
  return (
    <ScrollView style={styles.fullH}>
      <Header text="Create Account" />
      <View style={{marginHorizontal: 31}}>
        {upper.map(input => (
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
          marginTop={16}
          value={new Date(data.dateOfBirth)}
          onChange={date => handleChange('dateOfBirth', date.toISOString())}
        />
        {lower.map(input => (
          <Input
            key={input.id}
            value={input.value}
            onChange={text => handleChange(input.name, text)}
            title={input.title}
            placeholder={input.placeholder}
            marginTop={input.marginTop}
            eye
          />
        ))}
      </View>
      <Text style={styles.agreeText}>
        By Continuing, you agree to our{' '}
        <Text style={styles.bold}>Terms of Service</Text> and{' '}
        <Text style={styles.bold}>Privacy Policy</Text>.
      </Text>
      <View style={styles.belowWrap}>
        <Button text="Sign Up" marginTop={0} onPress={handleSubmit} />
        <View style={{width: '100%'}}>
          <Text
            style={styles.or}
            onPress={() => navigation.navigate('VerifyEmail')}>
            Or sign up with
          </Text>
          <View style={styles.imgWrap}>
            <Image source={require('../../assets/icons/facebook.png')} />
            <Image source={require('../../assets/icons/google.png')} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
