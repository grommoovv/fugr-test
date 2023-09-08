import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
import { Header } from '@/widgets/Header'
import cls from './RootLayout.module.scss'
import { Loader } from '@/shared/ui/loader'

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
