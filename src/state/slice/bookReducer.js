import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Thunk action to delete a book
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (bookId, { rejectWithValue }) => {
    try {
      // Make API call to delete the book
      await axios.delete(
        `https://book-e-sell-node-api.vercel.app/api/book?id=${bookId}`
      );
      window.location.href = "/editbooks";
      return bookId;
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
