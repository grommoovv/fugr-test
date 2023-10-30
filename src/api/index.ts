import { $axios } from './axios'
import { __API_KEY__ } from '../shared/constants'
import { buildQueryString } from '../shared/helpers'
import { SearchParams, ApiResponse, Book } from '../types'

class BookService {
  static async reciveAllBooks(searchParams: SearchParams) {
    return (await $axios<ApiResponse>(`${buildQueryString(searchParams)}`)).data
  }

  static async reciveOneBook(id: string) {
    return (await $axios<Book>(`${id}?key=${__API_KEY__}`)).data
  }
}

export { BookService }
