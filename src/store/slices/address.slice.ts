import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {AddressState, addressType} from '../../types/types';
import {
  ADD_ADDRESS,
  DELETE_ADDRESS,
  GET_ADDRESS,
  UPDATE_ADDRESS,
  WHOLE_DATA,
} from '../../graphql/query';
import client from '../../graphql/client';

const initialState: AddressState = {
  address: null,
  status: 'idle',
  error: null,
};

export const addAddress = createAsyncThunk(
  'address/addAddress',
  async (address: addressType, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: ADD_ADDRESS,
        variables: address,
        refetchQueries: [{query: GET_ADDRESS}, {query: WHOLE_DATA}],
      });
      return response?.data?.addAddress;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Add address failed');
    }
  },
);

export const getAddress = createAsyncThunk(
  'address/get',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_ADDRESS,
      });
      return response?.data?.getAddress;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get address failed');
    }
  },
);

export const updateAddress = createAsyncThunk(
  'address/update',
  async (address: addressType, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: UPDATE_ADDRESS,
        variables: address,
        refetchQueries: [{query: GET_ADDRESS}, {query: WHOLE_DATA}],
      });
      return response?.data?.updateAddress;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Update address failed');
    }
  },
);

export const deleteAddress = createAsyncThunk(
  'address/delete',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: DELETE_ADDRESS,
      });
      return response?.data?.deleteAddress;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Delete address failed');
    }
  },
);

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addAddress.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.address = action.payload;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getAddress.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.address = action.payload;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(updateAddress.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.address = action.payload;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(deleteAddress.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.address = null;
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const addressReducer = addressSlice.reducer;
