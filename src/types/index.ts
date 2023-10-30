interface Book {
  kind: string
  id: string
  volumeInfo: VolumeInfo
}

interface VolumeInfo {
  authors: string[]
  categories: string[]
  title: string
  description: string
  pageCount: number
  publishedDate: number
  imageLinks: {
    smallThumbnail: string | undefined
    thumbnail: string | undefined
  }
}

interface ApiResponse {
  kind: string
  totalItems: number
  items: Book[]
}

interface SearchParams {
  query: string
  subject?: CategoryType
  sort?: SortType
  startIndex: number
}

type CategoryType = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'

type SortType = 'relevance' | 'newest'

export type { Book, VolumeInfo, ApiResponse, SearchParams, CategoryType, SortType }
