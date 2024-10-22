import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {OrderState} from '../../types/types';
import client from '../../graphql/client';
import {
  ADD_ORDER,
  CANCEL_ORDER,
  DELETE_ORDER,
  GET_ORDERS,
  MAKE_ORDER,
  REMOVE_ORDER_ITEM,
  WHOLE_DATA,
} from '../../graphql/query';

const initialState: OrderState = {
  order: [],
  status: 'idle',
  total: 0,
  error: null,
};

export const addOrderItem = createAsyncThunk(
  'order/add',
  async (variables: {quantity: number; id: string}, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: ADD_ORDER,
        variables,
        refetchQueries: [{query: GET_ORDERS}],
      });
      return response?.data?.addOrderItem;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Add order failed');
    }
  },
);
export const removeOrderItem = createAsyncThunk(
  'order/remove',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: REMOVE_ORDER_ITEM,
        variables: {id},
        refetchQueries: [{query: GET_ORDERS}],
      });
      return response?.data?.removeOrderItem;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Remove order failed');
    }
  },
);

export const getOrder = createAsyncThunk(
  'order/get',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_ORDERS,
      });
      return response?.data?.getOrders;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get order failed');
    }
  },
);
export const deleteOrder = createAsyncThunk(
  'order/del',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: DELETE_ORDER,
        variables: {id},
      });
      return response?.data?.deleteOrder;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Delete order failed');
    }
  },
);

export const makeOrder = createAsyncThunk(
  'order/make',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: MAKE_ORDER,
        variables: {id},
        refetchQueries: [{query: WHOLE_DATA}],
      });
      return response?.data?.makeOrder;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Make order failed');
    }
  },
);

export const cancelOrder = createAsyncThunk(
  'order/cancel',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: CANCEL_ORDER,
        variables: {id},
        refetchQueries: [{query: WHOLE_DATA}],
      });
      return response?.data?.cancelOrder;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Cancel order failed');
    }
  },
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setTotal: (state, action: {payload: number}) => {
      state.total = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addOrderItem.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addOrderItem.fulfilled, state => {
        state.status = 'succeeded';
      })
      .addCase(addOrderItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(cancelOrder.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(cancelOrder.fulfilled, state => {
        state.status = 'succeeded';
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(deleteOrder.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, state => {
        state.status = 'succeeded';
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(makeOrder.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(makeOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(makeOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(removeOrderItem.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(removeOrderItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(removeOrderItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getOrder.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload || [];
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const orderReducer = orderSlice.reducer;
export const {setTotal} = orderSlice.actions;
