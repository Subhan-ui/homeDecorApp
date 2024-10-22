import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import {authReducer} from './slices/auth.slice';
import {addressReducer} from './slices/address.slice';
import {itemReducer} from './slices/items.slice';
import {favouriteReducer} from './slices/favourite.slice';
import {orderReducer} from './slices/order.slice';
import {ReviewReducer} from './slices/review.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  address: addressReducer,
  items: itemReducer,
  favourite: favouriteReducer,
  order: orderReducer,
  review: ReviewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
