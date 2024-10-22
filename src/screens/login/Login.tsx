import {Image, Text, View} from 'react-native';
import React from 'react';

import Input from '../../components/molecules/input/Input';
import Header from '../../components/header/Header';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './LoginStyles';
import Button from '../../components/molecules/button/Button';
import {useLogin} from './useLogin';
import {loginInputs} from '../../constants/inputs';

const Login = () => {
  const navigation = useTypeNavigation();
  const {data, handleChange, handleSubmit} = useLogin();
  const inputs = loginInputs(data);
  return (
    <View style={styles.wholeWrap}>
      <Header text={'Log In'} />
      <View style={{marginHorizontal: 32}}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.p}>Please enter your details to proceed.</Text>
        <View style={{marginTop: '14%'}}>
          {inputs.map(input => (
            <Input
              key={input.id}
              title={input.title}
              placeholder={input.placeholder}
              onChange={text => handleChange(input.name, text)}
              value={input.value}
              marginTop={input.marginTop}
              eye={input.eye}
            />
          ))}
          <Button text="Log In" marginTop={47} onPress={handleSubmit} />
          <Text
            style={styles.forgotPass}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </Text>
        </View>
      </View>
      <View style={styles.otherOpt}>
        <Text style={styles.otherText}>Or sign up with</Text>
        <View style={styles.imgWrap}>
          <Image source={require('../../assets/icons/facebook.png')} />
          <Image source={require('../../assets/icons/google.png')} />
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.dont}>Don't have an account?</Text>
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
