import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
import cls from './RootLayout.module.scss'

interface RootLayoutProps {}

export const RootLayout: FC = (props) => {
  return (
    <>
      <div className={cls.RootLayout}>
        <header></header>
        <main>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer></footer>
      </div>
    </>
  )
}
