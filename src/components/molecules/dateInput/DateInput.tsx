import DatePicker from 'react-native-date-picker';

import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './DateInputStyles';

const DateInput = ({
  color,
  marginTop,
  value,
  onChange,
}: {
  color?: boolean;
  value: Date;
  onChange: (date: Date) => void;
  marginTop?: number;
}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={[styles.wrap, {marginTop}]}>
      <Text style={styles.text}>Date Of Birth</Text>
      <Pressable
        onPress={() => setShow(true)}
        style={[styles.btn, {backgroundColor: color ? 'white' : '#FAF0E6'}]}>
        <Text style={styles.placeholder}>{value.toDateString()}</Text>
      </Pressable>
      <DatePicker
        modal
        open={show}
        date={value}
        onConfirm={(date: Date) => {
          onChange(date);
        }}
        mode={'date'}
      />
    </View>
  );
};

export default DateInput;
