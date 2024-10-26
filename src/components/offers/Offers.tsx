import {Text, View} from 'react-native';
import React from 'react';
import OffersPic from '../offersPic/OffersPic';
import {useOffers} from './useOffers';
import {styles} from './OfferStyle';

const Offers = () => {
  const {activeIndex, popular} = useOffers();

  return popular.length > 0 ? (
    <View style={styles.mt}>
      <OffersPic
        name={popular[activeIndex]?.name}
        price={popular[activeIndex]?.price}
        picture={popular[activeIndex]?.picture}
      />
      <View style={styles.scrollWrap}>
        {popular.map((_, index) => (
          <View
            key={index}
            style={index === activeIndex ? styles.activeBar : styles.unactive}
          />
        ))}
      </View>
    </View>
  ) : (
    <View style={styles.loadingWrap}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Offers;
