import {ScrollView, View} from 'react-native';

import HeaderItem from '../molecules/headerItem/HeaderItem';
import Filter from '../filter/Filter';
import Navbar from '../molecules/navbar/Navbar';
import {styles} from './ComponentWrapperStyles';
import {componentWrapperType} from '../../types/types';

const ComponentWrapper = (props: componentWrapperType) => {
  const {children, text, filter = true, wishlist = false, refresh} = props;
  return (
    <>
      <View style={styles.wrap}>
        <View style={{height: filter ? 122 : 72, marginBottom: 20}}>
          <HeaderItem text={text} wishlist={wishlist} />
          {filter && <Filter />}
        </View>
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          refreshControl={refresh}>
          {children}
        </ScrollView>
        <Navbar />
      </View>
    </>
  );
};

export default ComponentWrapper;
