import { $axios } from '@/shared/api/axios'
import { ApiResponse } from '../types'

/**
 * Book Service
 * Logic of api requests
 *
 *
 *
 */

export class BookService {
  static async reciveAllBooks(
    query: string,
    step: number = 0,
    subject: string = 'art',
    sort: string = 'relevance'
  ) {
    const response = await $axios<ApiResponse>(`volumes`, {
      params: {
        q: query,
        startIndex: step,
        maxResults: 30,
        subject: subject,
        orderBy: sort,
      },
    })

    return response.data
  }

  static async reciveOneBook() {}
}
