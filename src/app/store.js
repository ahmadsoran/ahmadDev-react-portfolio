import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { portfolioAPI } from "./portfolioAPI";


export const store = configureStore({
  reducer: {
    [portfolioAPI.reducerPath]: portfolioAPI.reducer,
  },

});

setupListeners(store.dispatch);

