// This is to configure the Redux store
// Include darkModeReducer as the reducer for the 'darkMode' state
// Include isMobileReducer as the reducer for the 'isMobile' state

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