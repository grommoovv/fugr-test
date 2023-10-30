import { FC, useState } from 'react'
import cls from './SortByOrder.module.scss'
import { setSelectedSort } from '../../../providers/redux/slice/bookSlice'
import { Select } from '../../../shared/ui/select'
import { SortType } from '../../../types'
import { useAppDispatch } from '../../../providers/redux'

interface SortByOrderProps {}

export const SortByOrder: FC = (props) => {
  const [sortValue, setSortValue] = useState<SortType>('relevance')
  const dispatch = useAppDispatch()

  const handleSort = (value: SortType) => {
    setSortValue(value)
    dispatch(setSelectedSort(value))
  }

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
