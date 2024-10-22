import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {itemState} from '../../types/types';
import client from '../../graphql/client';
import {GET_ITEMS} from '../../graphql/query';

const initialState: itemState = {
  items: null,
  status: 'idle',
  error: null,
  topItems: null,
};

export const getItems = createAsyncThunk(
  'items/getItems',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_ITEMS,
      });
      const items = response?.data?.getItems;
      return items;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get items failed');
    }
  },
);

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setTopItems: state => {
      if (state.items && state.items.length >= 2) {
        state.topItems = state.items.slice(0, 2);
      } else {
        state.topItems = null;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getItems.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
        if (state.items && state.items.length >= 2) {
          state.topItems = state.items.slice(1, 3);
        } else {
          state.topItems = null;
        }
      })
      .addCase(getItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const itemReducer = itemSlice.reducer;
export const {setTopItems} = itemSlice.actions;
