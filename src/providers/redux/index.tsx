import { FC, PropsWithChildren } from 'react'
import { Provider, useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BookSlice } from './slice/bookSlice'

const rootReducer = combineReducers({
  [BookSlice.name]: BookSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export { ReduxProvider, useAppDispatch, useAppSelector }
export type { AppState, AppDispatch }
