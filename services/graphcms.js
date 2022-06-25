import { GraphQLClient } from 'graphql-request'

export const url = process.env.NEXT_PUBLIC_GRAPHCMS_URL
export const apikey = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`

export const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: apikey
  }
})
