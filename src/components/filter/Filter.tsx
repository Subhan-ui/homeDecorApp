import {ScrollView, Text, View} from 'react-native';
import React from 'react';

import {styles} from './FilterStyles';

const items = [
  {id: 1, name: 'Living Room'},
  {id: 2, name: 'Bed'},
  {id: 3, name: 'Bed Room'},
  {id: 4, name: 'Sofa'},
  {id: 5, name: 'Table'},
  {id: 6, name: 'Chair'},
  {id: 7, name: 'Lights'},
  {id: 8, name: 'Decor'},
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
