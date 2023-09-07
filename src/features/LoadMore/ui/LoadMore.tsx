import { FC } from 'react'
import cls from './LoadMore.module.scss'
import { Button } from '@/shared/ui/button'
import { useAppDispatch, useAppSelector } from '@/app/providers/redux'
import { selectState, setPrevSearchParams } from '@/entities/book/model/slice/bookSlice'
import { reciveAllBooks } from '@/entities/book'
import { SearchParams } from '@/entities/book/api/types'
import { maxBookResultPerLoad } from '@/entities/book/api/service/BookService'

interface LoadMoreProps {}

export const LoadMore: FC = (props) => {
  const {
    searchCount,
    books: { length },
    prevSearchParams,
  } = useAppSelector(selectState)
  const dispatch = useAppDispatch()

  const handleLoadMore = () => {
    if (prevSearchParams) {
      const searchParams: SearchParams = {
        ...prevSearchParams,
        startIndex: prevSearchParams?.startIndex + maxBookResultPerLoad,
      }

      dispatch(setPrevSearchParams(searchParams))
      dispatch(reciveAllBooks(searchParams))
    }
  }

  if (searchCount > length && length !== 0) {
    return (
      <div className={cls.wrap}>
        <Button theme='primary' onClick={handleLoadMore}>
          Load More
        </Button>
      </div>
    )
  }

  return null
}
