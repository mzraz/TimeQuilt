import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../utils/Api';

const initialState = {
  loading: false,
  isLogged: false,
  accessToken: '',
  user: null,
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const response = await Api.post('user/signIn', data);
      return response.data;
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, thunkAPI) => {
    try {
      const response = await Api.post('user/signUp', data);
      return response.data;
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const verifyEmail = createAsyncThunk(
  'user/verifyEmail',
  async (data, thunkAPI) => {
    try {
      const config = {
        headers: {
          authorization: data.token,
        },
      };
      const response = await Api.post('user/verifyEmail', {}, config);
      return response.data;
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'user/forgotPassword',
  async (data, thunkAPI) => {
    try {
      const response = await Api.post('user/forgotPassword', data);
      return response.data;
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const verifyToken = createAsyncThunk(
  'user/verifyToken',
  async (data, thunkAPI) => {
    try {
      const config = {
        headers: {
          authorization: data.token,
        },
      };
      const response = await Api.post('user/verifyToken', {}, config);
      return response.data;
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);
export const newPassword = createAsyncThunk(
  'user/newPassword',
  async (data, thunkAPI) => {
    try {
      const config = {
        headers: {
          authorization: data.token,
        },
      };
      const response = await Api.post('user/newPassword', data, config);
      return response.data;
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const createProfile = createAsyncThunk(
  'user/createProfile',
  async (data, thunkAPI) => {
    try {
      // const config = {
      //   headers: {
      //     authorization: data.token,
      //   },
      // };
      const response = await Api.post(
        `/user/createProfile/${data.userId}`,
        data.profileData,
        // ,
        // config
      );
      return response.data;
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const coverImageUpload = createAsyncThunk(
  'user/coverImageUpload',
  async (data, thunkAPI) => {
    try {
      // const config = {
      //   headers: {
      //     authorization: data.token,
      //   },
      // };

      const formData = new FormData();
      if (data?.profileImage) {
        formData.append('profileImage', data.profileImage);
        const response = await Api.post(
          `user/uploadProfileImages/${data.userId}`,
          formData,
        );
        return response.data;
      } else {
        formData.append('coverImage', data.coverImage);
        const response = await Api.post(
          `user/uploadProfileImages/${data.userId}`,
          formData,
        );
        return response.data;
      }
    } catch (err) {
      let message = err.response.data.error;
      if (typeof message === 'object') {
        const values = Object.values(err.response.data.error);
        message = values[0];
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLogged = false;
      state.accessToken = '';
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLogged = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLogged = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLogged = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLogged = false;
      })
      .addCase(coverImageUpload.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.user = action.payload.data;
      });
  },
});

export const { logout } = authSlice.actions;

export const initialAuth = ({ auth }) => auth;

export default authSlice.reducer;
