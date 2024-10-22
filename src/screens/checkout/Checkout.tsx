import {RefreshControl, Text, View} from 'react-native';
import React, {useState} from 'react';
import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import RadioButton from '../../components/molecules/radioButton/RadioButton';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {styles} from './CheckoutStyles';
import Button from '../../components/molecules/button/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCheckout} from './useCheckout';
import { lightCamel } from '../../constants/colors';

const radios = [
  {id: 1, label: 'Cash on Delivery'},
  {id: 2, label: 'Paypal'},
  {id: 3, label: 'Apple Pay'},
  {id: 4, label: 'Credit Card'},
];

const Checkout = () => {
  const [selectedOption, setSelectedOption] =
    useState<string>('Cash on Delivery');
  const navigation = useTypeNavigation();
  const {userData, address, orders, total, refreshing, onRefresh, makingOrder} =
    useCheckout();
  const order = orders?.find(order => order.status === 'PENDING');
  return (
    <ComponentWrapper
      text="Checkout"
      filter={false}
      refresh={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <>
        <View style={styles.wrap}>
          <Text style={styles.text}>Shipping Address</Text>
          <MaterialCommunityIcons
            name="circle-edit-outline"
            size={23}
            color={lightCamel}
            onPress={() => navigation.navigate('Address')}
          />
        </View>
        <View style={styles.addressBox}>
          <Text style={[styles.text, {marginBottom: 5}]}>{userData?.name}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.address}>{userData?.mobileNumber}</Text>
        </View>
        <View>
          <View style={[styles.wrap, {marginTop: 30}]}>
            <Text style={styles.text}>Order Summary</Text>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={23}
              color={lightCamel}
              onPress={() => navigation.navigate('Cart')}
            />
          </View>
          <View style={styles.summaryWrap}>
            <View>
              {order?.items && order?.items?.length > 0 ? (
                order?.items?.map(item => (
                  <View key={item?.id} style={styles.summaryTextWrap}>
                    <Text style={styles.summaryText}>
                      {item?.furnitureItem?.name}
                    </Text>
                    <Text style={styles.summaryText2}>
                      {item?.quantity} items
                    </Text>
                  </View>
                ))
              ) : (
                <Text>No items here...</Text>
              )}
            </View>
            <Text style={styles.total}>${total.toFixed(2)}</Text>
          </View>
          <View style={styles.mt}>
            <Text style={styles.text}>Payment Method</Text>
            <View style={styles.radioWrap}>
              <View style={{gap: 8}}>
                {radios.map(radio => (
                  <RadioButton
                    label={radio.label}
                    key={radio.id}
                    checked={selectedOption === radio.label}
                    onChange={() => setSelectedOption(radio.label)}
                  />
                ))}
              </View>
            </View>
          </View>
          <View style={{marginTop: 45}}>
            <Text style={styles.h1}>Delivery Time</Text>
            <View style={styles.deliverWrap}>
              <Text style={styles.deliverP}>Estimated Delivery</Text>
              <Text style={styles.deliverP2}>1 Hour 25 mins</Text>
            </View>
          </View>
          <Button
            text="Pay Now"
            marginTop={45}
            onPress={() => order && makingOrder(order?.id)}
          />
        </View>
      </>
    </ComponentWrapper>
  );
};

export default Checkout;
