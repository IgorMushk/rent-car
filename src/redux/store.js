import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { advertsReducer } from "./advertsSlice";
import { filterReducer } from "./filtersSlice";

const favoritesPersistConfig = {
  key: 'adverts',
  storage,
  whitelist: ['favorites']
}

const persistedReducer = persistReducer(favoritesPersistConfig, advertsReducer)

export const store = configureStore({
    reducer: {
        adverts: persistedReducer,
        filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),      
  });

  export const persistor = persistStore(store)