import { gql } from 'graphql-request'
import { graphQLClient } from '../api/graphcms'

export const getMainPage = async () => {
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

  return { news, featured }
}

export const getFeaturedPage = async (pageSlug) => {
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
    pageSlug
  }

  const data = await graphQLClient.request(query, variables)

  return data
}

export const getNewsPage = async (pageSlug) => {
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
    pageSlug
  }

  const data = await graphQLClient.request(query, variables)

  return data
}

export const getLatestNewsPage = async () => {
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
  return newsPages
}

export const getFeaturedPaths = async () => {
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
    params: { slug: item.slug }
  }))

  return paths
}

export const getNewsPaths = async () => {
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
    params: { slug: item.slug }
  }))

  return paths
}
