import { configureStore } from '@reduxjs/toolkit';
import samplesReducer from './../slices/sampleSlice';

export default configureStore({
  reducer: {
    samples: samplesReducer,
  }
});