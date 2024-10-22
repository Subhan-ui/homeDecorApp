import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import client from '../../graphql/client';
import {
  AuthState,
  loginType,
  resetPasswordType,
  SignupSubType,
  updateUserType,
  verifyType,
} from '../../types/types';
import {
  FORGOT_PASSWORD,
  LOGIN_USER,
  RESET_PASSWORD,
  SIGNUP_USER,
  UPDATE_PROFILE,
  VERIFY_EMAIL,
  WHOLE_DATA,
} from '../../graphql/query';

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
  userData: null,
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (signupInput: SignupSubType, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: SIGNUP_USER,
        variables: signupInput,
      });
      return response?.data?.signup;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Sign failed');
    }
  },
);

export const verifyUser = createAsyncThunk(
  'auth/verify',
  async (verifyInput: verifyType, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: VERIFY_EMAIL,
        variables: verifyInput,
      });
      return response?.data?.verify;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Verify failed');
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (verifyInput: loginType, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: LOGIN_USER,
        variables: verifyInput,
      });
      return response?.data?.login;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Login failed');
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: FORGOT_PASSWORD,
        variables: {email},
      });
      return response?.data?.forgotPassword;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Forgot password failed');
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (resetInput: resetPasswordType, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: RESET_PASSWORD,
        variables: resetInput,
      });
      return response?.data?.resetPassword;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Reset password failed');
    }
  },
);

export const getUserData = createAsyncThunk(
  'user/get',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: WHOLE_DATA,
      });
      return response?.data?.getUser;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get user data failed');
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/update',
  async (variables: updateUserType, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: UPDATE_PROFILE,
        variables,
        refetchQueries: [{query: WHOLE_DATA}],
      });
      console.log('async response ->>>  ', response);
      return response?.data?.updateUser;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Update user failed');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(verifyUser.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(forgotPassword.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(resetPassword.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getUserData.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(updateUser.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const authReducer = authSlice.reducer;
