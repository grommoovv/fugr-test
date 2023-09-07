import { FC, useState } from 'react'
import cls from './SearchCountMessage.module.scss'
import { useAppSelector } from '@/app/providers/redux'
import { selectState } from '@/entities/book/model/slice/bookSlice'

interface SearchCountMessageProps {}

export const SearchCountMessage: FC = () => {
  const { searchQuery, searchCount } = useAppSelector(selectState)

  if (searchQuery && searchCount > 0) {
    return (
      <div className={cls.message}>
        Found {searchCount} books for the keyword '{searchQuery}'
      </div>
    )
  }

  return null
}
