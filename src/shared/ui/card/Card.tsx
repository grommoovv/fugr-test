import { FC } from 'react'
import cls from './Card.module.scss'
import { volumeInfo } from '@/entities/book/model/types/Book'

interface CardProps {
  details: volumeInfo
}

export const Card: FC<CardProps> = ({ details }) => {
  // console.log('card:', details)

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
