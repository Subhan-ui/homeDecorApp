import {Text, View} from 'react-native';
import React from 'react';

import Header from '../../components/header/Header';
import Input from '../../components/molecules/input/Input';
import {styles} from './ForgotPasswordStyles';
import Button from '../../components/molecules/button/Button';
import {useForgotPassword} from './useForgotPassword';

const ForgotPassword = () => {
  const {email, handleChange, handleSubmit} = useForgotPassword();
  return (
    <View style={styles.fullH}>
      <Header text="Forgot Password" />
      <View style={styles.textWrap}>
        <Text style={styles.h1}>Reset Password?</Text>
        <Text style={styles.p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolores
          ut deleniti cumque accusamus
        </Text>
      </View>
      <View style={styles.inputWrap}>
        <View style={styles.input2Wrap}>
          <Input
            value={email}
            onChange={handleChange}
            title="Enter Your Email Address"
            placeholder="example@example.com"
            color
          />
          <Button text="Next" marginTop={47} onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
