import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { Loader } from '../../shared/ui/loader'
import { BookService } from '../../api'
import { VolumeInfo } from '../../types'
import { BookDetails } from '../../components/BookDetails'

interface BookPageProps {}

const BookPage: FC = (props) => {
  const { id } = useParams()

  const [bookData, setBookData] = useState<VolumeInfo | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const reciveBook = async () => {
    try {
      if (id) {
        const res = await BookService.reciveOneBook(id)
        setBookData(res.volumeInfo)
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
      setError('Failed To Load Data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    reciveBook()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return <>{bookData && <BookDetails book={bookData} />}</>
}

export default BookPage
