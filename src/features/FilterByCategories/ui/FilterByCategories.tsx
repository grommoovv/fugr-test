import { FC, useState } from 'react'
import cls from './FilterByCategories.module.scss'
import { Select } from '@/shared/ui/select'
import { setSelectedCategory } from '@/entities/book/model/slice/bookSlice'
import { CategoryType } from '@/entities/book/model/slice/bookSlice.types'
import { useAppDispatch } from '@/app/providers/redux'

interface FilterByCategoriesProps {}

export const FilterByCategories: FC = (props) => {
  const [filterValue, setFilterValue] = useState('all')
  const dispatch = useAppDispatch()

  // console.log('filter value:', filterValue)

  const handleFilter = (value: CategoryType) => {
    setFilterValue(value)
    dispatch(setSelectedCategory(value))
  }

  const categoryOptions = [
    {
      value: 'all',
      text: 'All',
    },
    {
      value: 'art',
      text: 'Art',
    },
    {
      value: 'biography',
      text: 'Biography',
    },
    {
      value: 'computers',
      text: 'Computers',
    },
    {
      value: 'history',
      text: 'History',
    },
    {
      value: 'medical',
      text: 'Medical',
    },
    {
      value: 'poetry',
      text: 'Poetry',
    },
  ]

  return (
    <>
      <label className={cls.label}>
        <div className={cls.label__title}>Categories</div>
        <div>
          <Select fields={categoryOptions} handleSelectSort={handleFilter} />
        </div>
      </label>
    </>
  )
}
