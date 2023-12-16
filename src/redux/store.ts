import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/users/authSlice";
import { productApi } from "./services/products/productApi";
import { userApi } from "./services/users/userApi";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({}).concat([productApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
