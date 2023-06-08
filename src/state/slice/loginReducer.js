import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    error: null,
    user: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = loginSlice.actions;

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());

  try {
    // Make the API request to perform login
    const response = await axios.post('https://book-e-sell-node-api.vercel.app/api/user/login', credentials);

    // Dispatch the success action with the user data
    dispatch(loginSuccess(response.data));

    toast.info("Logged in Succesfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch(loginFailure(error.message));
  }
};

export const selectIsLoading = (state) => state.login.isLoading;
export const selectError = (state) => state.login.error;

export default loginSlice.reducer
