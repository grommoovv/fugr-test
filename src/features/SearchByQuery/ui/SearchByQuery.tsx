import { FC, useState } from 'react'
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch'
import { reciveAllBooks } from '@/entities/book'
import { Input } from '@/shared/ui/input/Input'
import cls from './SearchByQuery.module.scss'
import { setSearchQuery } from '@/entities/book/model/slice/BookSlice'

interface SearchByQueryProps {}

export const SearchByQuery: FC = (props) => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  const handleClickButton = () => {
    if (inputValue.trim() !== '') {
      dispatch(setSearchQuery(inputValue))
      dispatch(reciveAllBooks({ query: inputValue, page: 0 }))
      setInputValue('')
    }
  }

  return (
    <>
      <Input
        placeholder='What book would you like to find ?'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClickButton}>OK</button>
    </>
  )
}
