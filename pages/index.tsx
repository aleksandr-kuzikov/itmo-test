import type { NextPage } from 'next'
import MainLayout from "../layouts/MainLayout";
import ContentLayout from "../layouts/ContentLayout";
import NewsCard from "../components/NewsCard/NewsCard";
import NewsGrid from "../components/NewsGrid/NewsGrid";

const Home: NextPage = () => {

  return (
    <div>
      <MainLayout>
          <ContentLayout>
              <h1>Новости и события</h1>
              <NewsGrid>
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
              </NewsGrid>
          </ContentLayout>
      </MainLayout>
    </div>
  )
}

export default Home
