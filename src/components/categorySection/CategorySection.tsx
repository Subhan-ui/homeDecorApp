import {Image, View} from 'react-native';

import {styles} from './CategorySectionStyles';
import {lightCamel} from '../../constants/colors';

const images = {
  example1: require('../../assets/icons/categories/category1.png'),
  example2: require('../../assets/icons/categories/category2.png'),
  example3: require('../../assets/icons/categories/category3.png'),
  example4: require('../../assets/icons/categories/category4.png'),
  example5: require('../../assets/icons/categories/category5.png'),
};
type ImageKeys = keyof typeof images;
const CategorySection = ({
  path,
  select,
}: {
  path: ImageKeys;
  select: boolean;
}) => {
  return (
    <View style={[styles.wrap, {backgroundColor: select ? lightCamel : ''}]}>
      <Image source={images[path]} />
    </View>
  );
};

export default CategorySection;
