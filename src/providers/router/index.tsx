import { createBrowserRouter } from 'react-router-dom'
import { BookPage } from '../../pages/BookPage'
import { HomePage } from '../../pages/HomePage'
import { NotFoundPage } from '../../pages/NotFoundPage'
import { Layout } from '../../layout'

export const AppRouterProvider = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/books/:id',
        element: <BookPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
