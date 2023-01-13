import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import paymentReducer from './reducers/payment';
import categoriesReducer from './reducers/categories';
import currentCollectionReducer from './reducers/current-collection';

export const store = configureStore({
  reducer: {
    payment: paymentReducer,
    categories: categoriesReducer,
    currentCollection: currentCollectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
