import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {itemState} from '../../types/types';
import client from '../../graphql/client';
import {
  GET_CATEGORIES,
  GET_ITEM_CATEGORY_WISE,
  GET_ITEMS,
  GET_NEW_COLLECTION,
  GET_POPULAR,
  SEARCH,
} from '../../graphql/query';
import {SubCategory} from '../../screens';

const initialState: itemState = {
  items: null,
  status: 'idle',
  error: null,
  topItems: null,
  newCollection: null,
  popular: null,
  categories: null,
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

export const getNew = createAsyncThunk(
  'items/new',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_NEW_COLLECTION,
      });
      return response?.data?.newCollection;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get new collection failed');
    }
  },
);

export const getPopular = createAsyncThunk(
  'items/popular',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_POPULAR,
      });
      return response?.data?.popularItems;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get popular items failed');
    }
  },
);

export const getCategories = createAsyncThunk(
  'items/categories',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_CATEGORIES,
      });
      return response?.data?.getCategories;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get categories failed');
    }
  },
);

export const getCategoryWiseItems = createAsyncThunk(
  'items/categoryWiseItems',
  async (
    variables: {categoryId: string; subCategoryId: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await client.query({
        query: GET_ITEM_CATEGORY_WISE,
        variables,
      });
      return response?.data?.getSubItems;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get category wise items failed');
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
      })
      .addCase(getPopular.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getPopular.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getPopular.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getCategories.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getCategoryWiseItems.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getCategoryWiseItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getCategoryWiseItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getNew.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getNew.fulfilled, (state, action) => {
        state.newCollection = action.payload;
        state.status = 'succeeded';
        if (state.newCollection && state.newCollection.length >= 2) {
          state.topItems = state.newCollection.slice(0, 2);
        } else {
          state.topItems = null;
        }
      })
      .addCase(getNew.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const itemReducer = itemSlice.reducer;
export const {setTopItems} = itemSlice.actions;
