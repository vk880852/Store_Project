import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice'; // Import the default export from 'CartSlice'

// Create the store
export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});


