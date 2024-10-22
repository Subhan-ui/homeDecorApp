import {Text, View} from 'react-native';

import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import WishlistCard from '../../components/wishlistCard/WishlistCard';
import {styles} from './WishlistStyles';
import {useWishlist} from './useWishlist';
import NoCart from '../../components/nocart/NoCart';

const Wishlist = () => {
  const {items, loading} = useWishlist();
  return (
    <ComponentWrapper text="Dream Room" filter={false} wishlist>
      <>
        <Text style={styles.text}>My board</Text>
        {loading ? (
          <View style={{gap: 20}}>
            {items?.map(item => (
              <WishlistCard
                name={item.furnitureItem.name}
                price={item.furnitureItem.price}
                picture={item.furnitureItem.picture}
                key={item.id}
                id={item.id}
              />
            ))}
          </View>
        ) : (
          <>
            <NoCart where="Wishlist" />
          </>
        )}
      </>
    </ComponentWrapper>
  );
};

export default Wishlist;
