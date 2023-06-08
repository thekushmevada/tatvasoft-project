import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slice/formReducer';
import loginReducer from './slice/loginReducer';
import authReducer from './slice/authReducer';
import bookReducer from './slice/bookReducer';

const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
    auth: authReducer,
    book: bookReducer,
  },
});

export default store;