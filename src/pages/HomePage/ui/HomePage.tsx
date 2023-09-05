import { FC } from 'react'
import { Showcase } from '@/widgets/showcase/ui/Showcase'
import { SearchResultMessage } from '@/widgets/SearchResultMessage/ui/SearchResultMessage'

interface HomePageProps {}

const HomePage: FC = (props) => {
  return (
    <>
      <div className={''}>
				<SearchResultMessage />
        <Showcase />
      </div>
    </>
  )
}

export default HomePage
