import {ScrollView, Text, View} from 'react-native';
import React from 'react';

import {styles} from './FilterStyles';

const items = [
  {id: 6, name: 'All'},
  {id: 1, name: 'Bed Room'},
  {id: 2, name: 'Living Room'},
  {id: 3, name: 'Kitchen'},
  {id: 4, name: 'Office'},
  {id: 5, name: 'Dinning Room'},
];

const Filter = () => {
  return (
    <ScrollView
      horizontal
      style={styles.scroll}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      {items.map(item => (
        <View key={item.id} style={styles.wrapper}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.line} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Filter;
