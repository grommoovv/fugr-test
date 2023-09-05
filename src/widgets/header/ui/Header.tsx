import { FC } from 'react'
import cls from './Header.module.scss'
import { Input } from '@/shared/ui/input/Input'
import { Select } from '@/shared/ui/select'
import { MultifunctionalForm } from '@/widgets/MultifunctionalForm/ui/MultifunctionalForm'

interface HeaderProps {}

export const Header: FC = (props) => {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.container}>
          <h1 className={cls.title}>Search For Books</h1>
          <MultifunctionalForm />
        </div>
      </header>
    </>
  )
}
