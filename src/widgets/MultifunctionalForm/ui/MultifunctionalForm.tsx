import { FC, FormEvent } from 'react'
import cls from './MultifunctionalForm.module.scss'
import { Input } from '@/shared/ui/input/Input'
import { Select } from '@/shared/ui/select'
import { SearchByQuery } from '@/features/SearchByQuery'

interface MultifunctionalFormProps {}

export const MultifunctionalForm: FC = (props) => {
  const filterableCategories = [
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

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={cls.form} onSubmit={handleSubmitForm}>
        <div className={cls.search}>
          <SearchByQuery />
        </div>
        <div className={cls.filter}>
          <Select defaultValue='All' selectFields={filterableCategories} />
          {/* <Select /> */}
        </div>
      </form>
    </>
  )
}
