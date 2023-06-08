import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slice/formReducer';
import loginReducer from './slice/loginReducer';
// import formReducer from './reducers/formReducer';

const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
  },
});

export default store;