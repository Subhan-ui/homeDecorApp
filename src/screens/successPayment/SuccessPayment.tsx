import {Image, Text, View} from 'react-native';
import React from 'react';

import ComponentWrapperView from '../../components/componentWrapperView/ComponentWrapperView';
import DualButtons from '../../components/dualButtons/DualButtons';
import {styles} from './SuccessPaymentStyles';

const SuccessPayment = () => {
  return (
    <ComponentWrapperView text="My Cart" navbar={false} filter={false}>
      <>
        <View style={styles.wrap}>
          <Image source={require('../../assets/icons/progress.png')} />
          <View style={{gap: 3}}>
            <Text style={styles.h1}>Thank You</Text>
            <Text style={styles.p}>Your Order is Complete.</Text>
          </View>
        </View>
        <DualButtons to="DeliveryTime" />
      </>
    </ComponentWrapperView>
  );
};

export default SuccessPayment;
