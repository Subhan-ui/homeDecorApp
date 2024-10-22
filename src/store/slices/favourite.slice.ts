import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {favouriteState} from '../../types/types';
import client from '../../graphql/client';
import {
  ADD_FAVOURITE,
  DEL_FAVOURITE,
  GET_FAVOURITES,
} from '../../graphql/query';

const initialState: favouriteState = {
  favourites: null,
  status: 'idle',
  error: null,
};

export const addFavourite = createAsyncThunk(
  'favourite/add',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: ADD_FAVOURITE,
        variables: {id},
        refetchQueries: [{query: GET_FAVOURITES}],
      });

      return response?.data?.addFavourite;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Add favourite failed');
    }
  },
);

export const getFavourites = createAsyncThunk(
  'favourite/get',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_FAVOURITES,
      });
      return response?.data?.getUserFavourites;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get favourites failed');
    }
  },
);

export const deleteFavourite = createAsyncThunk(
  'favourite/delete',
  async (id: string, {rejectWithValue}) => {
    try {
      await client.mutate({
        mutation: DEL_FAVOURITE,
        refetchQueries: [{query: GET_FAVOURITES}],
        variables: {id},
      });

      return id;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Delete favourite failed');
    }
  },
);

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFavourite.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addFavourite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favourites = action.payload;
      })
      .addCase(addFavourite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getFavourites.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getFavourites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favourites = action.payload;
      })
      .addCase(getFavourites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(deleteFavourite.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteFavourite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const data = action.payload;
        if (state.favourites) {
          state.favourites = state.favourites?.filter(item => item.id !== data);
        }
      })
      .addCase(deleteFavourite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const favouriteReducer = favouriteSlice.reducer;
