import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: FC = () => {
  return (
    <>
      <div className={''}>
        <h1>404</h1>
        <p>No such page exists</p>
        <Link to={'/'}>Go Back To Home</Link>
      </div>
    </>
  )
}

export default NotFoundPage
