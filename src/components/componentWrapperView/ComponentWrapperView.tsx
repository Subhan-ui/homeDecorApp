import {View} from 'react-native';
import React from 'react';
import HeaderItem from '../molecules/headerItem/HeaderItem';
import Filter from '../filter/Filter';
import Navbar from '../molecules/navbar/Navbar';
import {styles} from './ComponentWrapperViewStyles';

const ComponentWrapperView = ({
  children,
  text,
  filter = true,
  navbar = true,
}: {
  children: JSX.Element;
  text: string;
  filter?: boolean;
  navbar?: boolean;
}) => {
  return (
    <>
      <View style={styles.fullH}>
        <View style={{height: filter ? 122 : 72, marginBottom: 20}}>
          <HeaderItem text={text} />
          {filter && <Filter />}
        </View>
        <View style={styles.view}>{children}</View>
        {navbar && <Navbar />}
      </View>
    </>
  );
};

export default ComponentWrapperView;
