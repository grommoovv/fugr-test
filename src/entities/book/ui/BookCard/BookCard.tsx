import { FC } from 'react'
import cls from './BookCard.module.scss'
import { volumeInfo } from '../../model/types/Book'

interface BookCardProps {
  details: volumeInfo
}

export const BookCard: FC<BookCardProps> = ({ details }) => {
  const imageURL = details?.imageLinks?.thumbnail
  const title = details?.title
  const publishedDate = details?.publishedDate
  const formattedCategories = details?.categories?.join(', ')
  const formattedAuthors = details?.authors?.join(', ')

  return (
    <>
      <div className={cls.card}>
        <div className={cls.media}>
          <img src={imageURL} alt={title} />
        </div>
        <div className={cls.info}>
          <div className={cls.categories}>{formattedCategories}</div>
          <div className={cls.title}>{title}</div>
          <div className={cls.authors}>{formattedAuthors}</div>
          <div className={cls.published}>Published: {publishedDate}</div>
        </div>
      </div>
    </>
  )
}
