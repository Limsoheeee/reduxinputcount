import { configureStore } from '@reduxjs/toolkit';
import inpuCountSlice from'../slice/inputcountSlice';

export default configureStore({
  reducer: {
    inputcounter: inpuCountSlice,
  }
});