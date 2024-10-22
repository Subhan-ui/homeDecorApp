import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {dropdownType, Rating} from '../../types/types';
import {linen} from '../../constants/colors';

const data: {label: Rating; value: Rating}[] = [
  {label: 'WORST', value: 'WORST'},
  {label: 'BAD', value: 'BAD'},
  {label: 'NORMAL', value: 'NORMAL'},
  {label: 'GOOD', value: 'GOOD'},
  {label: 'BEST', value: 'BEST'},
];

const DropdownComponent = ({value, onChange}: dropdownType) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <Text style={styles.label}>Rating</Text>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            onChange(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 60,
    width: '100%',
    minWidth: 250,
    borderRadius: 50,
    paddingHorizontal: 21,
    paddingVertical: 13,
    backgroundColor: linen,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'relative',
    left: 15,
    top: 10,
    zIndex: 999,
    fontSize: 15,
    fontWeight: '500',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    width: '100%',
    fontSize: 16,
  },
});
