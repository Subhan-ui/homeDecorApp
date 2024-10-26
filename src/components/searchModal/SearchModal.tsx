import {Image, Modal, Pressable, Text, TextInput, View} from 'react-native';
import React from 'react';
import Header from '../header/Header';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './SearchModalStyles';
import {useSearchModal} from './useSearchModal';

const data = [
  {id: 1, name: 'Bed'},
  {id: 2, name: 'Lamp'},
  {id: 3, name: 'Plastic Plants'},
  {id: 4, name: 'Carpet'},
  {id: 5, name: 'Sofa'},
  {id: 6, name: 'Blue Chairs'},
];

const SearchModal = ({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) => {
  const {text, handleChange, handleSubmit} = useSearchModal(close);
  return (
    <Modal visible={visible} style={styles.modal}>
      <Header text="Search" />
      <View style={styles.inputWrap}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={text}
          onChangeText={handleChange}
        />
        <Pressable style={styles.iconWrap} onPress={() => handleSubmit(text)}>
          <Feather name="search" size={15} color={'#232323'} />
        </Pressable>
      </View>
      <View style={styles.searchWrap}>
        <Text style={styles.searchText}>Top Searches</Text>
        <View style={styles.btnWrap}>
          {data.map(item => (
            <Pressable
              key={item.id}
              style={styles.btn}
              onPress={() => handleSubmit(item.name)}>
              <Image source={require('../../assets/icons/search.png')} />
              <Text style={styles.btnText}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
