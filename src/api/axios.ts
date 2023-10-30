import axios from 'axios'
import { __API__ } from '../shared/constants'

export const $axios = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
  },
})
