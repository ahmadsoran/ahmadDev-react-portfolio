import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { portfolioAPI } from "./portfolioAPI";
import loginAuth from '../featrues/userSlice.js'

export const store = configureStore({
  reducer: {
    loginAuth,
    [portfolioAPI.reducerPath]: portfolioAPI.reducer,
  },

});

setupListeners(store.dispatch);
