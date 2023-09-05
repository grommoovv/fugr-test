import { createAsyncThunk } from '@reduxjs/toolkit'
import { Book } from '../types/Book'
import { BookService } from '../../api/service/BookService'

export const reciveAllBooks = createAsyncThunk<
  { books: Book[]; searchCount: number },
  { query: string; page: number },
  { rejectValue: string }
>('@books/reciveAllBooks', async function ({ query, page }, { rejectWithValue }) {
  try {
    const response = await BookService.reciveAllBooks(query, page)
    return {
      books: response?.items,
      searchCount: response?.totalItems,
    }
  } catch (error) {
    return rejectWithValue('Failed to load Books. Try again...')
  }
})
