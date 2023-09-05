import { FC, useEffect } from 'react'
import { reciveAllBooks } from '@/entities/book'
import { Card } from '@/shared/ui/card'
import { useAppSelector } from '@/shared/libs/hooks/useAppSelector'
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch'

import cls from './Showcase.module.scss'

interface ShowcaseProps {}

export const Showcase: FC = (props) => {
  const { books, status, error, searchQuery } = useAppSelector((s) => s['@books'])

  console.log('status:', status)
  console.log('books:', books)

  if (status === 'loading') {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <div className={cls.showcase}>
        {books ? books.map((book) => <Card details={book.volumeInfo} key={book.id} />) : <></>}
      </div>
    </>
  )
}
