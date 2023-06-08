import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    submitting: false,
    submitted: false,
    error: null,
  },
  reducers: {
    submitFormStart: (state) => {
      state.submitting = true;
      state.submitted = false;
      state.error = null;
    },
    submitFormSuccess: (state) => {
      state.submitting = false;
      state.submitted = true;
      state.error = null;
    },
    submitFormFailure: (state, action) => {
      state.submitting = false;
      state.submitted = false;
      state.error = action.payload;
    },
  },
});

export const { submitFormStart, submitFormSuccess, submitFormFailure } =
  formSlice.actions;

export const submitForm = (formData) => async (dispatch) => {
  dispatch(submitFormStart());

  try {
    // Make the API request to submit the form data
    await axios.post('https://book-e-sell-node-api.vercel.app/api/user', formData)
    .then((response) => {
        console.log(response.data);
        dispatch(submitFormSuccess(response.data));

        toast.info("Registered Succesfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
    })

    // Dispatch the success action
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch(submitFormFailure(error.message));
  }
};

export default formSlice.reducer;
