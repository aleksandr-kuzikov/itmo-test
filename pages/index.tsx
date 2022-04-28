import type { NextPage } from 'next'
import Link from 'next/link'
import ContentLayout from "../layouts/ContentLayout";

const Home: NextPage = () => {

  return (
      <ContentLayout>
          <h1>Стартовая страница</h1>
          <Link href={'/news'}><a>News</a></Link>
      </ContentLayout>
  )
}

export default Home
