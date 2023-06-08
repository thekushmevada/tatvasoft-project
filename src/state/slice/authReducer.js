import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUserSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    setUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUserStart, setUserSuccess, setUserFailure, signOut } = authSlice.actions;

// Set User
export const setUser = (user) => async (dispatch) => {
  dispatch(setUserStart());

  try {
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Dispatch the success action with the user data
    dispatch(setUserSuccess(user));
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch(setUserFailure(error.message));
  }
};

// Sign Out
export const signOutUser = () => async (dispatch) => {
  try {
    // Clear user data from local storage
    localStorage.removeItem('user');

    // Dispatch the sign out action
    dispatch(signOut());
  } catch (error) {
    console.log('Error signing out:', error);
  }
};

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
