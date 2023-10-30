import { FC } from 'react'
import { BookListWidget } from '../../widgets/BookListWidget'
import { LoadMore } from '../../features/LoadMore'

interface HomePageProps {}

const HomePage: FC = (props) => {
  return (
    <>
      <div className={''}>
        <BookListWidget />
        <LoadMore />
      </div>
    </>
  )
}

export default HomePage
