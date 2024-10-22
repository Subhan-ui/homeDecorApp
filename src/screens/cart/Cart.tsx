import {ScrollView, View, Text, RefreshControl} from 'react-native';
import React from 'react';

import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import CartItem from '../../components/cartItem/CartItem';
import {styles} from './CartStyles';
import Button from '../../components/molecules/button/Button';
import {useCart} from './useCart';
import NoCart from '../../components/nocart/NoCart';

const Cart = () => {
  const {data, ok, total, items, handleCheckout, onRefresh, refreshing} =
    useCart();
  const cartData = Array.isArray(data?.items) ? data.items : [];
  return (
    <ComponentWrapper
      text="My Cart"
      filter={false}
      refresh={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {cartData.length > 0 && ok ? (
        <View style={styles.flex}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            style={styles.scroll}>
            {cartData?.map(
              item =>
                item && (
                  <CartItem
                    picture={item.furnitureItem.picture}
                    id={item.furnitureItem.id}
                    itemId={item.id}
                    key={item.id}
                    name={item.furnitureItem.name}
                    price={item.furnitureItem.price}
                    quantity={item.quantity}
                  />
                ),
            )}
          </ScrollView>
          <View style={styles.line} />
          <View>
            {items.map(item => (
              <View style={styles.wrap} key={item.id}>
                <Text style={styles.h1}>{item.h1}</Text>
                <Text style={styles.p}>{item.p}</Text>
              </View>
            ))}
          </View>
          <View style={styles.line2} />
          <View style={styles.totalWrap}>
            <Text style={styles.h2}>Total</Text>
            <Text style={styles.p2}>${total.toFixed(2)}</Text>
          </View>
          <Button text="Check Out" onPress={handleCheckout} marginTop={45} />
        </View>
      ) : (
        <NoCart where="Cart" />
      )}
    </ComponentWrapper>
  );
};

export default Cart;
