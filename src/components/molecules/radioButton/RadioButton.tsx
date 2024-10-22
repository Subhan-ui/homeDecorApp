import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './RadioButtonStyles';

const RadioButton = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <>
      <TouchableOpacity onPress={() => onChange()} style={styles.wrap}>
        <View style={styles.wrapper}>
          {checked && <View style={styles.checked} />}
        </View>
        <Text style={styles.label}>{label}</Text>
        {label === 'Credit Card' && (
          <>
            <View style={styles.container}>
              <Text style={styles.containerText}>*** *** *** 67 /00 /00</Text>
            </View>
            <Image source={require('../../../assets/icons/edit.png')} />
          </>
        )}
      </TouchableOpacity>
    </>
  );
};

export default RadioButton;