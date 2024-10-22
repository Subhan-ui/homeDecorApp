import {RefreshControl, Text, View} from 'react-native';
import React from 'react';

import OrderItem from '../../components/orderItem/OrderItem';
import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import {useOrder} from './useOrder';
import {styles} from './orderStyles';

const Order = () => {
  const {ok, data, refreshing, onRefresh, handleConfirm} = useOrder();
  return (
    <ComponentWrapper
      text="My Orders"
      filter={false}
      refresh={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {ok ? (
        <View style={{gap: 35}}>
          {data?.map(order => {
            const items = order?.items;
            return items?.map(item => (
              <OrderItem
                key={item?.id}
                id={order?.id}
                handleConfirm={() => handleConfirm(order?.id)}
                status={order?.status}
                date={order?.updatedAt}
                picture={item?.furnitureItem?.picture}
                head={item?.furnitureItem?.name}
                desc={item?.furnitureItem?.description}
                price={item?.price}
                quantity={item?.quantity}
                total={item?.price * item?.quantity}
              />
            ));
          })}
        </View>
      ) : (
        <View style={styles.wrap}>
          <Text style={styles.text}>You don't have any order yet.</Text>
        </View>
      )}
    </ComponentWrapper>
  );
};

export default Order;
