import { DetailedBookPage } from 'pages/DetailedBookPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from 'shared/layout'
// import { RootLayout } from '@/shared/layout'
// import { HomePage } from '@/pages/HomePage'
// import { DetailedBookPage } from '@/pages/DetailedBookPage'
// import { NotFoundPage } from '@/pages/NotFoundPage'

export const AppRouterProvider = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/books/:id',
        element: <DetailedBookPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
