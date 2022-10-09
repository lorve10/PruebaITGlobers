import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './imagenes/ImageneSlice';
export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
})

