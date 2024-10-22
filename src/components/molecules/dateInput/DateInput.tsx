import DatePicker from 'react-native-date-picker';
import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

import {styles} from './DateInputStyles';
import {linen} from '../../../constants/colors';
import {dateInputType} from '../../../types/types';

const DateInput = ({color, marginTop, value, onChange}: dateInputType) => {
  const [show, setShow] = useState(false);
  return (
    <View style={[styles.wrap, {marginTop}]}>
      <Text style={styles.text}>Date Of Birth</Text>
      <Pressable
        onPress={() => setShow(true)}
        style={[styles.btn, {backgroundColor: color ? 'white' : linen}]}>
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
