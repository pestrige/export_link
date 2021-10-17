import { combineReducers, configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  input: inputReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
