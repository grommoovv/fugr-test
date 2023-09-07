import { FC, useState } from 'react'
import cls from './SortByOrder.module.scss'
import { Select } from '@/shared/ui/select'
import { selectState, setSelectedSort } from '@/entities/book/model/slice/bookSlice'
import { SortType } from '@/entities/book/model/slice/bookSlice.types'
import { useAppDispatch, useAppSelector } from '@/app/providers/redux'

interface SortByOrderProps {}

export const SortByOrder: FC = (props) => {
  const [sortValue, setSortValue] = useState<SortType>('relevance')
  const { selectedSort, selectedCategory } = useAppSelector(selectState)
  const dispatch = useAppDispatch()

  const handleSort = (value: SortType) => {
    setSortValue(value)
    dispatch(setSelectedSort(value))
  }

  // console.log('sort by:', sortValue)
  // console.log('sort by: (s)', selectedSort)
  // console.log('category: (s)', selectedCategory)

  const sortOptions = [
    {
      value: 'relevance',
      text: 'Relevance',
    },
    {
      value: 'newest',
      text: 'Newest',
    },
  ]

  return (
    <>
      <label className={cls.label}>
        <div className={cls.label__title}>Sort by</div>
        <div>
          <Select fields={sortOptions} handleSelectSort={handleSort} />
        </div>
      </label>
    </>
  )
}
