import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from '../store';

interface IsMobileState {
   isMobile: boolean;
}

const initialState: IsMobileState = {
   isMobile: window.innerWidth > 768
}

const isMobileSlice = createSlice({
   name: 'isMobile',
   initialState,
   reducers: {
      setIsMobile: (state, action: PayloadAction<boolean>) => {
         state.isMobile = action.payload;
      },
   },
});

export const { setIsMobile } = isMobileSlice.actions;
export default isMobileSlice.reducer;
export const updateIsMobile = (): AppThunk => (dispatch: Dispatch) => {
   const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth > 768));
   };
   handleResize();

   window.addEventListener('resize', handleResize);
   return () => {
      window.removeEventListener('resize', handleResize);
   }
}