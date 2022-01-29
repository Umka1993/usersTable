import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const setupStore = (): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
