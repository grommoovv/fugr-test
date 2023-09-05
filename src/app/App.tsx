import { FC } from 'react'
import cls from './App.module.scss'
import { RouterProvider } from 'react-router'
import { AppRouterProvider } from './providers/router'

interface AppProps {}

export const App: FC = (props) => {
  return (
    <>
      <RouterProvider router={AppRouterProvider} />
    </>
  )
}
