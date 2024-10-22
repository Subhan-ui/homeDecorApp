import {ScrollView, View} from 'react-native';
import React from 'react';
import HeaderItem from '../molecules/headerItem/HeaderItem';
import Filter from '../filter/Filter';
import Navbar from '../molecules/navbar/Navbar';
import {styles} from './ComponentWrapperStyles';

const ComponentWrapper = ({
  children,
  text,
  filter = true,
  wishlist = false,
  refresh,
}: {
  children: JSX.Element;
  text: string;
  filter?: boolean;
  wishlist?: boolean | null;
  refresh?: JSX.Element;
}) => {
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
