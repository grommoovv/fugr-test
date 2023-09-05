import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/shared/layout'
import { HomePage } from '@/pages/HomePage'
import { DetailedBookPage } from '@/pages/DetailedBookPage'

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
])
