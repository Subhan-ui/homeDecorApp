import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import useTypeNavigation from '../../../navigation/useTypeNavigation';
import {styles} from './HeaderItemStyles';
import {headerItemType} from '../../../types/types';
import SearchModal from '../../searchModal/SearchModal';

const HeaderItem = ({text, wishlist = false}: headerItemType) => {
  const navigation = useTypeNavigation();
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.wrap}>
      <SearchModal visible={visible} close={() => setVisible(false)} />
      <Feather
        name="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
        color={'black'}
      />
      <Text style={styles.text}>{text}</Text>
      {wishlist === true ? (
        <View style={styles.imgWrap}>
          <Image source={require('../../../assets/icons/trash.png')} />
          <Image source={require('../../../assets/icons/edit.png')} />
          <Image source={require('../../../assets/icons/add.png')} />
        </View>
      ) : wishlist === false ? (
        <Pressable onPress={()=>setVisible(true)}>
          <Image source={require('../../../assets/icons/search.png')} />
        </Pressable>
      ) : (
        <Image
          source={require('../../../assets/icons/eye.png')}
          style={{height: 0, width: 0}}
        />
      )}
    </View>
  );
};

export default HeaderItem;
