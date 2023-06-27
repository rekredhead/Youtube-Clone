// This is to configure the Redux store
// Include darkModeReducer as the reducer for the 'darkMode' state
// Include isMobileReducer as the reducer for the 'isMobile' state

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeReducer';
import isMobileReducer, { updateIsMobile } from './isMobileReducer';

const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
      isMobile: isMobileReducer,
   },
});

store.dispatch(updateIsMobile());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;