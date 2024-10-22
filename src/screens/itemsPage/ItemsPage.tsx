import React from 'react';
import Card from '../../components/card/Card';
import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import {setItemsPage} from './setItemsPage';
import {Text} from 'react-native';

const ItemsPage = () => {
  const {items, ok, data} = setItemsPage();
  return (
    <ComponentWrapper text="Special Offers">
      {ok ? (
        <>
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
        </>
      ) : (
        <>
          <Text>{data}</Text>
        </>
      )}
    </ComponentWrapper>
  );
};

export default ItemsPage;
