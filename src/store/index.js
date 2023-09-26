import { configureStore } from '@reduxjs/toolkit';
import { authReducer} from './slice';
import { getReducer } from './slice';
import { uplodeReducer } from './slice';

export const store = configureStore({
    reducer: {
      auth: authReducer,
       getData:getReducer,
       uplodeData:uplodeReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
    })
  });