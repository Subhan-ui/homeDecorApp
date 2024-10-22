import {View} from 'react-native';

import CategoryButton from '../../components/categoryButton/CategoryButton';
import ComponentWrapperView from '../../components/componentWrapperView/ComponentWrapperView';

const SubCategory = () => {
  return (
    <ComponentWrapperView text="Categories">
      <View style={{height: '100%', width: '100%'}}>
        <CategoryButton
          data={[
            {id: 1, name: 'Category 1'},
            {id: 2, name: 'Category 2'},
            {id: 3, name: 'Category 3'},
            {id: 4, name: 'Category 4'},
            {id: 5, name: 'Category 5'},
            {id: 5, name: 'Category 5'},
            {id: 5, name: 'Category 5'},
          ]}
        />
      </View>
    </ComponentWrapperView>
  );
};

export default SubCategory;
