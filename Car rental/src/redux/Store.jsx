import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import{ persistReducer,persistStore }from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import bookingSlice from './user/bookingDetails/bookingSlice';


const rootReducer = combineReducers({ user: userReducer,booking:bookingSlice});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
   serializableCheck: false,
  }),
})
export const persistor = persistStore(store);
export const clearPersistedState = () => {
  persistor.purge();}