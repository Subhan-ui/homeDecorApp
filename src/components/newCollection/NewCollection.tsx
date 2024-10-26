import {Text, View} from 'react-native';

import Card from '../card/Card';
import {styles} from './NewCollectionStyles';
import { useNewCollection } from './useNewCollection';

const NewCollection = () => {
  const {items, gotoAll} = useNewCollection()
  return (
    <View>
      <View style={styles.textWrap}>
        <Text style={styles.text}>New Collection</Text>
        <Text style={styles.textU} onPress={gotoAll}>View All</Text>
      </View>
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
