import {configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import food from './food/slice'

export const store = configureStore({
  reducer: {
    food,
  }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch