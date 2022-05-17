import { gql } from 'graphql-request'
import { useRouter } from 'next/router'
import React from 'react'
import { graphQLClient } from '../../api/graphcms'
import Breadcrumbs from '../../components/Common/Breadcrumbs'
import Header from '../../components/Common/Header'
import SEO from '../../components/Common/SEO'
import MainContent from '../../components/NewsPage/MainContent'

export const getStaticProps = async (pageContext) => {
  const pageSlug = pageContext.params.slug

  const query = gql`
    query ($pageSlug: String!) {
      newPage(where: { slug: $pageSlug }) {
        id
        title
        date
        description {
          html
          text
        }
        mediaPhotos {
          id
          url
        }
        mainPhoto {
          url
        }
      }
    }
  `
  const variables = {
    pageSlug,
  }

  const data = await graphQLClient.request(query, variables)
  const { mainPhoto, mediaPhotos, title, description, date } = data.newPage

  return {
    props: { mainPhoto, mediaPhotos, title, description, date },
  }
}

export const getStaticPaths = async () => {
  const query = gql`
    query {
      newPages {
        id
        slug
      }
    }
  `
  const data = await graphQLClient.request(query)
  const paths = data.newPages.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

const NewsPage = ({ mainPhoto, mediaPhotos, title, description, date }) => {
  const router = useRouter()

  return (
    <>
      <SEO
        title={title}
        ogtitle="YEEZY"
        description={`${description.text.substring(0, 70)  }...`}
        ogdescription={`${description.text.substring(0, 70)  }...`}
        url={`http://localhost:3000${router.asPath}`}
        type='article'
        image={mainPhoto.url}
      />
      <>
        <Header />
        <Breadcrumbs />
        <MainContent title={title} date={date} mainPhoto={mainPhoto} description={description} mediaPhotos={mediaPhotos} />
      </>
    </>
  )
}

export default NewsPage
