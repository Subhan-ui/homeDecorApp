import {Rating, reviewState} from '../../types/types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import client from '../../graphql/client';
import {ADD_REVIEW, GET_REVIEWS} from '../../graphql/query';

const initialState: reviewState = {
  reviews: null,
  status: 'idle',
  error: null,
};

export const getReviews = createAsyncThunk(
  'reviews/get',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_REVIEWS,
        variables: {id},
      });
      return response?.data?.getReviews;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get reviews failed');
    }
  },
);

export const addReviews = createAsyncThunk(
  'reviews/add',
  async (
    variables: {rating: Rating; comment: String; id: String},
    {rejectWithValue},
  ) => {
    try {
      const response = await client.mutate({
        mutation: ADD_REVIEW,
        variables,
        refetchQueries: [{query: GET_REVIEWS, variables: {id: variables.id}}],
      });
      return response?.data?.addReview;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Add review failed');
    }
  },
);

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getReviews.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(addReviews.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
  },
});

export const ReviewReducer = reviewSlice.reducer;
