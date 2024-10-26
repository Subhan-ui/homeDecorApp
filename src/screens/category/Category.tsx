import {Text, View} from 'react-native';
import React from 'react';

import CategoryButton from '../../components/categoryButton/CategoryButton';
import ComponentWrapperView from '../../components/componentWrapperView/ComponentWrapperView';
import {useCategory} from './useCategory';

const Category = () => {
  const {data, goToSubCategory} = useCategory();
  return (
    <ComponentWrapperView text="Categories">
      {data.length > 0 ? (
        <View style={{height: '100%', width: '100%'}}>
          <CategoryButton data={data} onClick={(id)=>goToSubCategory(id)}/>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ComponentWrapperView>
  );
};

export default Category;
