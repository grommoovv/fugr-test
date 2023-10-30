import { SearchParams } from '../../types'
import { __API_KEY__, maxBookPerLoad } from '../constants'

const buildQueryString = ({ query, subject, sort, startIndex }: SearchParams) => {
  let buildedQueryString = `?q=${query}&key=${__API_KEY__}`

  if (subject && subject !== 'all') {
    buildedQueryString += `+subject:${subject}`
  }
  if (sort) {
    buildedQueryString += `&orderBy=${sort}`
  }

  buildedQueryString += `&startIndex=${startIndex}&maxResults=${maxBookPerLoad}`

  return buildedQueryString
}

export { buildQueryString }
