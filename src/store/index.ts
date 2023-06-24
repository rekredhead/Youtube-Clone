// This is to configure the Redux store and include darkModeReducer as the reducer for the 'darkMode' state
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeReducer';

const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;