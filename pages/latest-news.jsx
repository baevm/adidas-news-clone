import { gql } from 'graphql-request'
import dynamic from 'next/dynamic'
import React from 'react'
import { graphQLClient } from '../api/graphcms'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
// import MainContent from '../components/LatestNewsPage/MainContent'

const MainContent = dynamic(() => import('../components/LatestNewsPage/MainContent'), { ssr: false }) // ssr false to fix bug with styledcomponents hydration
const LatestNews = ({ newsPages }) => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <MainContent newsPages={newsPages} />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = gql`
    query {
      newPages {
        slug
        date
        title
        id
        mainPhoto {
          url
        }
      }
    }
  `

  const data = await graphQLClient.request(query)
  const newsPages = data.newPages

  return {
    props: {
      newsPages
    }
  }
}
export default LatestNews
