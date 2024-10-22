import {Text, View} from 'react-native';

import Header from '../../components/header/Header';
import Input from '../../components/molecules/input/Input';
import {styles} from './VerifyEmailStyles';
import Button from '../../components/molecules/button/Button';
import {useVerify} from './useVerify';
import {verifyInputs} from '../../constants/inputs';

const VerifyEmail = () => {
  const {data, handleChange, handleSubmit} = useVerify();
  const inputs = verifyInputs(data);
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
          {inputs.map(input => (
            <Input
              key={input.id}
              value={input.value}
              onChange={text => handleChange(input.name, text)}
              title={input.title}
              placeholder={input.placeholder}
              marginTop={input.marginTop}
              color
            />
          ))}
          <Button text="Verify" marginTop={47} onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default VerifyEmail;
