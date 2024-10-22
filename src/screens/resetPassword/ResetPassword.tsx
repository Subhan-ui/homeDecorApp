import {Text, View} from 'react-native';
import React from 'react';

import Header from '../../components/header/Header';
import Input from '../../components/molecules/input/Input';
import {styles} from './ResetPasswordStyles';
import Button from '../../components/molecules/button/Button';
import {useResetPassword} from './useResetPassword';
import {resetPasswordInputs} from '../../constants/inputs';

const ResetPassword = () => {
  const {data, handleChange, handleSubmit} = useResetPassword();
  const inputs = resetPasswordInputs(data);
  return (
    <View>
      <Header text="Set Password" />
      <View style={styles.wrap}>
        <Text style={styles.h1}>Change the Password</Text>
        <Text style={styles.p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolores
          ut deleniti cumque accusamus
        </Text>
      </View>
      <View style={{marginHorizontal: 31}}>
        {inputs.map(input => (
          <Input
            title={input.title}
            placeholder={input.placeholder}
            eye={input.eye}
            marginTop={input.marginTop}
            onChange={text => handleChange(input.name, text)}
            value={input.value}
            key={input.id}
          />
        ))}
        <Button text="Reset Password" marginTop={47} onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default ResetPassword;
