import React from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Common/Header'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Head from 'next/head'
import MainContent from '../components/FeaturedPage/MainContent'
import { gql } from 'graphql-request'
import { graphQLClient } from '../api/graphcms'
import SEO from '../components/Common/SEO'

export const getStaticProps = async (pageContext) => {
  const pageSlug = pageContext.params.slug

  const query = gql`
    query ($pageSlug: String!) {
      featuredPage(where: { slug: $pageSlug }) {
        id
        title
        mainPhoto {
          url
        }
        mediaPhotos {
          id
          url
        }
        description {
          html
          text
        }
        productDetails {
          url
          fileName
        }
      }
    }
  `
  const variables = {
    pageSlug,
  }

  const data = await graphQLClient.request(query, variables)
  const { mainPhoto, mediaPhotos, title, description, productDetails } = data.featuredPage

  return {
    props: { mainPhoto, mediaPhotos, title, description, productDetails },
  }
}

export const getStaticPaths = async () => {
  const query = gql`
    query {
      featuredPages {
        id
        slug
      }
    }
  `
  const data = await graphQLClient.request(query)
  const paths = data.featuredPages.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

const FeaturedPage = ({ mainPhoto, mediaPhotos, title, description, productDetails }) => {
  const router = useRouter()

  return (
    <>
      <SEO
        title={title}
        ogtitle={'YEEZY'}
        description={description.text.substring(0, 70) + '...'}
        ogdescription={description.text.substring(0, 70) + '...'}
        url={`http://localhost:3000${router.asPath}`}
        type='article'
        image={mainPhoto.url}
      />
      <Header />
      <Breadcrumbs />
      <MainContent mainPhoto={mainPhoto} mediaPhotos={mediaPhotos} title={title} description={description} productDetails={productDetails} />
    </>
  )
}

export default FeaturedPage
