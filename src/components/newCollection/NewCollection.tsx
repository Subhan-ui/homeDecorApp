import {Text, View} from 'react-native';

import Card from '../card/Card';
import {styles} from './NewCollectionStyles';
import {useAppSelector} from '../../store/hook';

const NewCollection = () => {
  const items = useAppSelector(state => state.items.topItems);
  return (
    <View>
      <Text style={styles.text}>New Collection</Text>
      <View style={styles.wrap}>
        {items?.map(item => (
          <Card
            marginBottom={24}
            key={item.id}
            name={item.name}
            description={item.description}
            picture={item.picture}
            price={item.price}
            id={item.id}
          />
        ))}
      </View>
    </View>
  );
};

export default NewCollection;
