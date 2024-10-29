import {Image, ScrollView, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import CategorySection from '../../components/categorySection/CategorySection';
import BestSeller from '../../components/bestSeller/BestSeller';
import NewCollection from '../../components/newCollection/NewCollection';
import Navbar from '../../components/molecules/navbar/Navbar';
import {styles} from './HomeStyles';
import {useAppDispatch} from '../../store/hook';
import {getItems, getNew} from '../../store/slices/items.slice';
import {getUserData} from '../../store/slices/auth.slice';
import Offers from '../../components/offers/Offers';

const Home = () => {
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      (async () => {
        await dispatch(getItems());
        const res = await dispatch(getUserData());
        console.log(res.payload)
      })();
    }, [dispatch]),
  );
  return (
    <View style={styles.fullH}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrap}>
          <View>
            <Text style={styles.h1}>
              Hi, Welcome Back
            </Text>
            <Text style={styles.p}>Create Spaces that bring joy</Text>
          </View>
          <Image source={require('../../assets/icons/search.png')} />
        </View>
        <Offers />
        <View>
          <Text style={styles.heading}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategorySection path="example1" select={false} />
            <CategorySection path="example2" select={true} />
            <CategorySection path="example3" select={false} />
            <CategorySection path="example4" select={false} />
            <CategorySection path="example5" select={false} />
          </ScrollView>
        </View>
        <BestSeller />
        <NewCollection />
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default Home;
