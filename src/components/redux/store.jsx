import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';

const persistConfig = {
   key: 'contacts',
   storage,
};

const rootReducer = combineReducers({
   contacts: contactsReducer,
   filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export let persistor = persistStore(store);
