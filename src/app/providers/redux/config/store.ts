import { BookSlice } from '@/entities/book/model/slice/BookSlice'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [BookSlice.name]: BookSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
