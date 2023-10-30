import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'

import { Header } from './header'
import { Loader } from '../shared/ui/loader'

export const Layout: FC = () => {
  return (
    <>
      <div className='layout'>
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
