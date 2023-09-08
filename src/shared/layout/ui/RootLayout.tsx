import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'

import cls from './RootLayout.module.scss'
import { Header } from '../../../widgets/Header'
import { Loader } from '../../ui/loader'

interface RootLayoutProps {}

export const RootLayout: FC = (props) => {
  return (
    <>
      <div className={cls.RootLayout}>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <footer></footer>
      </div>
    </>
  )
}
