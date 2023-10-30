import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { reciveAllBooks } from '../thunk/bookThunk'
import { CategoryType, SortType, SearchParams, Book } from '../../../types'

interface InitBookState {
  books: Book[]
  searchCount: number
  searchQuery: string
  selectedCategory: CategoryType
  selectedSort: SortType
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected'
  error: string | null
  prevSearchParams: SearchParams | null
}

const initBookState: InitBookState = {
  books: [],
  searchCount: 0,
  searchQuery: '',
  selectedCategory: 'all',
  selectedSort: 'relevance',
  status: 'idle',
  error: null,
  prevSearchParams: null,
}

const BookSlice = createSlice({
  name: 'BOOKS',
  initialState: initBookState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<CategoryType>) => {
      state.selectedCategory = action.payload
    },
    setSelectedSort: (state, action: PayloadAction<SortType>) => {
      state.selectedSort = action.payload
    },
    setPrevSearchParams: (state, action: PayloadAction<SearchParams>) => {
      state.prevSearchParams = action.payload
    },
    resetRecivedData: (state) => {
      state.books = []
    },
    resetFilters: (state) => {
      state.searchQuery = ''
      state.selectedCategory = 'all'
      state.selectedSort = 'relevance'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reciveAllBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(reciveAllBooks.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.books.push(...action.payload.items)
        state.searchCount = action.payload.totalItems
      })
      .addCase(reciveAllBooks.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload as string
      })
  },
})

export { BookSlice }
export const {
  setSearchQuery,
  setSelectedCategory,
  setSelectedSort,
  setPrevSearchParams,
  resetRecivedData,
  resetFilters,
} = BookSlice.actions
