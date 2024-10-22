import {Image, Text, View} from 'react-native';
import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './DeliveryTimeStyles';
import Button from '../../components/molecules/button/Button';

const items = [
  {id: 1, title: 'Your order has been processed', time: '2 min'},
  {
    id: 2,
    title: 'Order has been processed and is ready to be shipped',
    time: '21 min',
  },
  {id: 3, title: 'The delivery is on his way', time: '23 min'},
  {id: 4, title: 'Your order has been delivered', time: '15 min'},
];

const DeliveryTime = () => {
  const navigation = useTypeNavigation();
  return (
    <View>
      <ComponentWrapper text="Track Order" filter={false}>
        <>
          <View style={styles.stSectionWrap}>
            <Text style={styles.text}>Shipping Address</Text>
            <View style={styles.stBox}>
              <Text style={[styles.text, {marginBottom: 5}]}>Name here</Text>
              <Text style={styles.subText}>address here</Text>
              <Text style={styles.subText}>phone number here</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/icons/map.png')}
            style={styles.mapImg}
          />
          <View style={styles.deliveryWrap}>
            <View>
              <Text style={styles.h1}>Deliver Time</Text>
              <Text style={styles.h2}>Estimated Delivery</Text>
            </View>
            <Text style={styles.h3}>1 Hour, 25 Mins</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.trackingWrap}>
            <Image
              source={require('../../assets/icons/vBar.png')}
              style={{height: 125}}
            />
            <View>
              {items.map(item => (
                <View key={item.id} style={styles.textWrap}>
                  <Text style={styles.p}>{item.title}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              ))}
            </View>
          </View>
          <Button
            text="Return Home"
            marginTop={45}
            onPress={() => navigation.navigate('Home')}
          />
        </>
      </ComponentWrapper>
    </View>
  );
};

export default DeliveryTime;
