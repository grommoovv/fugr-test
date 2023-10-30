import { FC } from 'react'
import cls from './LoadMore.module.scss'
import { setPrevSearchParams } from '../../../providers/redux/slice/bookSlice'
import { Button } from '../../../shared/ui/button'
import { useAppDispatch, useAppSelector } from '../../../providers/redux'
import { SearchParams } from '../../../types'
import { maxBookResultPerLoad } from '../../../shared/helpers'
import { reciveAllBooks } from '../../../providers/redux/thunk/bookThunk'

export const LoadMore: FC = () => {
  const {
    searchCount,
    books: { length },
    prevSearchParams,
  } = useAppSelector((s) => s.BOOKS)
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
