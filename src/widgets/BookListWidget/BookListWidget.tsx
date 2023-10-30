import { FC } from 'react'
import cls from './BookListWidget.module.scss'
import { BookCard } from '../../components/BookCard'
import { useAppSelector } from '../../providers/redux'
import { Loader } from '../../shared/ui/loader'

interface BookListWidgetProps {}

export const BookListWidget: FC = () => {
  const { books, status, error, searchQuery, searchCount } = useAppSelector((s) => s.BOOKS)

  if (status === 'loading' && books.length === 0) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  if (books.length > 0) {
    return (
      <>
        {searchQuery && searchCount > 0 && (
          <div className={cls.message}>
            Found {searchCount} books for the keyword '{searchQuery}'
          </div>
        )}
        <ul className={cls.list}>
          {books.map((book) => (
            <li className={cls.item} key={book.id}>
              <BookCard book={book.volumeInfo} bookId={book.id} />
            </li>
          ))}
        </ul>
      </>
    )
  }

  return null
}
