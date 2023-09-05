import { Book } from '../types/Book'

export type CategoryType =
  | 'all'
  | 'art'
  | 'biography'
  | 'computers'
  | 'history'
  | 'medical'
  | 'poetry'

export type SortType = 'relevance' | 'newest'

interface InitialBookState {
  books: Book[]
  searchCount: number
  searchQuery: string
  selectedCategory: CategoryType
  sortBy: SortType
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected'
  error: string | null
}

export const initialBookState: InitialBookState = {
  books: [],
  searchCount: 0,
  searchQuery: '',
  selectedCategory: 'all',
  sortBy: 'relevance',
  status: 'idle',
  error: null,
}
