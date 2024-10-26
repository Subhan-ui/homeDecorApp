import {View} from 'react-native';

import CategoryButton from '../../components/categoryButton/CategoryButton';
import ComponentWrapperView from '../../components/componentWrapperView/ComponentWrapperView';
import {navigatorTypes} from '../../types/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useSubCategory} from './useSubCategory';

type SubCategoryRoute = RouteProp<navigatorTypes, 'SubCategory'>;

const SubCategory = () => {
  const route = useRoute<SubCategoryRoute>();
  const {id, name, data} = route.params;
  const {onClickSub} = useSubCategory(name);
  return (
    <ComponentWrapperView text={name}>
      <View style={{height: '100%', width: '100%'}}>
        <CategoryButton
          data={data}
          onClick={subCategoryId => onClickSub(id, subCategoryId)}
        />
      </View>
    </ComponentWrapperView>
  );
};

export default SubCategory;
