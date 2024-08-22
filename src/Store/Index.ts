import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer,persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig ={
    key:'root',
    storage,
    version:1
}
const persistedReducer = persistReducer(persistConfig, authSlice)

export const store = configureStore({
  reducer: {
    auth:persistedReducer,
  },
})

export const  persistor = persistStore(store);
