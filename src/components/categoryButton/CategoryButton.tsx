import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Dimensions, Pressable} from 'react-native';
import {styles} from './CategoryButtonStyles';

const GridComponent = ({data}: {data: {id: number; name: string}[]}) => {
  const [height, setHeight] = useState<number>(0);
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const total = data.length;
  const numColumns = 2;
  const baseHeight =
    (screenHeight - 276) / Math.max(2, Math.ceil(total / numColumns));
  useEffect(() => {
    setHeight(baseHeight);
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        numColumns={numColumns}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable
            style={[
              styles.gridItem,
              {height},
              {width: screenWidth / numColumns - 12},
            ]}>
            <Text style={styles.title}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default GridComponent;
