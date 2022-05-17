import { gql } from 'graphql-request'
import { graphQLClient } from '../api/graphcms'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
import SEO from '../components/Common/SEO'
import MainContent from '../components/MainPage/MainContent'

export const getStaticProps = async () => {
  const newsquery = gql`
    query {
      newPages {
        title
        id
        slug
        mainPhoto {
          url
        }
      }
      featuredPages {
        id
        slug
        title
        mainPhoto {
          url
        }
      }
    }
  `

  const data = await graphQLClient.request(newsquery)
  const news = data.newPages
  const featured = data.featuredPages

  return {
    props: {
      news,
      featured,
    },
  }
}

export default function Home({ news, featured }) {
  return (
    <>
      <SEO
        title="adidas News Site | Press Resources for all Brands, Sports and Innovations : YEEZY"
        ogtitle="YEEZY"
        description={news[6].title}
        ogdescription={news[6].title}
        url='http://localhost:3000/yeezy'
        type='website'
        image={news[6].mainPhoto.url}
      />
      <Header />
      <Breadcrumbs />
      <MainContent news={news} featured={featured} />
      <Footer />
    </>
  )
}
