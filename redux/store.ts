import { configureStore } from "@reduxjs/toolkit";
import attributesReducer from "@/redux/attributesSlice";

export const store = configureStore({
  reducer: {
    attributes: attributesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
