import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import moviesReducer from './slices/movieSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
