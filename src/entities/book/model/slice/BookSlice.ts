import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CategoryType, SortType, initialBookState } from './initialState'
import { Book } from '../types/Book'
import { RootState } from '@/app/providers/redux/config/store'
import { reciveAllBooks } from '../thunk/BookThunk'

/*
	Main logic of book slice

	Reducers:
	1. Searching
	2. Selecting Category
	3. Sorting
	4. Reset Filters

	Builder:
	1. Recive data by search query
	2. Recive current detailed book page data
*/

export const BookSlice = createSlice({
  name: '@books',
  initialState: initialBookState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<CategoryType>) => {
      state.selectedCategory = action.payload
    },
    setSortBy: (state, action: PayloadAction<SortType>) => {
      state.sortBy = action.payload
    },
    resetFilters: (state) => {
      state.searchQuery = ''
      state.selectedCategory = 'all'
      state.sortBy = 'relevance'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reciveAllBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(reciveAllBooks.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.books = action.payload.books
        state.searchCount = action.payload.searchCount
      })
      .addCase(reciveAllBooks.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload as string
      })
  },
})

/*
	Selectors
*/

export const selectAllBooks = (state: RootState) => state['@books'].books
export const selectSearchQuery = (state: RootState) => state['@books'].searchQuery
export const selectSelectedCategory = (state: RootState) => state['@books'].selectedCategory
export const selectSortBy = (state: RootState) => state['@books'].sortBy

/*
	Actions
*/

export const { setSearchQuery, setSelectedCategory, setSortBy, resetFilters } = BookSlice.actions
