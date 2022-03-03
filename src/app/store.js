import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { portfolioAPI } from "./portfolioAPI";
import likeSlice from '../featrues/likeSlice.js'
import tokenSlice from '../featrues/tokenSlice.js'

export const store = configureStore({
  reducer: {
    likeSlice,
    [portfolioAPI.reducerPath]: portfolioAPI.reducer,
    tokenSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioAPI.middleware),


});

setupListeners(store.dispatch);
