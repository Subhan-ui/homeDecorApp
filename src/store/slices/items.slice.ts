import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {itemState} from '../../types/types';
import client from '../../graphql/client';
import {GET_ITEMS, SEARCH} from '../../graphql/query';

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

export const searchItems = createAsyncThunk(
  'items/search',
  async (text: string, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: SEARCH,
        variables: {text},
      });
      return response?.data?.searchItems;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Searching Items Failed');
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
        
        state.items = [...action.payload];
        state.status = 'succeeded';
      
        
        const sortedItems = state.items.sort((a, b) => b.createdAt - a.createdAt);
      
        
        if (sortedItems.length >= 2) {
          state.topItems = sortedItems.slice(0, 2); 
        } else {
          state.topItems = null;
        }
      })
      

      .addCase(getItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(searchItems.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(searchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const itemReducer = itemSlice.reducer;
export const {setTopItems} = itemSlice.actions;
