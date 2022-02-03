import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { portfolioAPI } from "./portfolioAPI";
import likeSlice from '../featrues/likeSlice.js'

export const store = configureStore({
  reducer: {
    likeSlice,
    [portfolioAPI.reducerPath]: portfolioAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(portfolioAPI.middleware),
  

});

setupListeners(store.dispatch);
