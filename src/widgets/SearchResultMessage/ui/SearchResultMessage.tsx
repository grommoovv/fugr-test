import { FC, useState } from 'react'
import cls from './SearchResultMessage.module.scss'
import { useAppSelector } from '@/shared/libs/hooks/useAppSelector'

interface SearchResultMessageProps {}

export const SearchResultMessage: FC = (props) => {
  const [msg, setMsg] = useState('')
  const { searchQuery, searchCount, status } = useAppSelector((s) => s['@books'])

  if (status === 'loading') {
    return null
  }

  if (searchCount === 0) {
    return null
  }

  return (
    <>
      <div className={cls.message}>
        Found {searchCount} books for the keyword '{searchQuery}'
      </div>
    </>
  )
}
