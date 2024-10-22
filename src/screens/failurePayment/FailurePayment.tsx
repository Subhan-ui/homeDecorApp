import {Image, Text, View} from 'react-native';
import React from 'react';
import ComponentWrapperView from '../../components/componentWrapperView/ComponentWrapperView';
import {styles} from './FailurePaymentStyles';
import DualButtons from '../../components/dualButtons/DualButtons';

const FailurePayment = () => {
  return (
    <ComponentWrapperView text="My Cart" navbar={false} filter={false}>
      <>
        <View style={styles.sectionWrap}>
          <Image source={require('../../assets/icons/progress.png')} />
          <View style={styles.textWrap}>
            <Text style={styles.h1}>Oops!, Something Went Wrong</Text>
            <Text style={styles.h2}>
              We are sorry Your payment could not be processed. Try Again.
            </Text>
          </View>
        </View>
        <DualButtons to="Checkout" />
      </>
    </ComponentWrapperView>
  );
};

export default FailurePayment;
