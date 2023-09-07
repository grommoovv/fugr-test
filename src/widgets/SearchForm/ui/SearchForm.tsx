import { FC, FormEvent } from 'react'
import cls from './SearchForm.module.scss'
import { Input } from '@/shared/ui/input/Input'
import { Select } from '@/shared/ui/select'
import { SearchByQuery } from '@/features/SearchByQuery'
import { FilterByCategories } from '@/features/FilterByCategories'
import { SortByOrder } from '@/features/SortByOrder'

interface SearchFormProps {}

export const SearchForm: FC = () => {
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={cls.form} onSubmit={handleSubmitForm}>
        <div className={cls.search}>
          <SearchByQuery />
        </div>
        <div className={cls.filters}>
          <FilterByCategories />
          <SortByOrder />
        </div>
      </form>
    </>
  )
}
