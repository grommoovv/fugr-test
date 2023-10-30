import { FC, useState } from 'react'
import cls from './FilterByCategories.module.scss'
import { setSelectedCategory } from '../../../providers/redux/slice/bookSlice'
import { Select } from '../../../shared/ui/select'
import { useAppDispatch } from '../../../providers/redux'
import { CategoryType } from '../../../types'

interface FilterByCategoriesProps {}

export const FilterByCategories: FC = (props) => {
  const dispatch = useAppDispatch()

  const handleFilter = (value: CategoryType) => {
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
