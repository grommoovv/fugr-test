import { FC } from 'react'
import cls from './Loader.module.scss'

interface LoaderProps {}

export const Loader: FC = (props) => {
  return (
    <>
      <div className={cls.loader}>Loading...</div>
    </>
  )
}
