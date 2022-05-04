import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import Image from 'next/image'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import MainContent from '../components/MainContent'

export const getStaticProps = async () => {
  const url = 'https://api-eu-central-1.graphcms.com/v2/cl2mxsgbp2f0t01xu7edo4ali/master'
  const apikey =
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTE2MDM0NzEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMm14c2dicDJmMHQwMXh1N2VkbzRhbGkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzRmNGM4NTUtMTQ1Zi00YTZkLWIxMDEtYWE0MTE4MTQwODI4IiwianRpIjoiY2wycWkyYXB0MGl1djAxeXgweGpvMHJ2YSJ9.rXVaCW32a24x-gdRNAMoe5H5z9ZoTpl80yPp9rxHUYOINhHBAFRQ2yrAKxLdQ6JuQ34EbS6xpxY2Py0ixQZVdB2v6SK4-a5rVHiR2kAMsH7VMNJiWqvhFrGBsUeKoip5zdY9i95Iwuf5lrfBc18hg0uWIUgMlahZdrvjywq9AbsKbdB0twTeBwC3Xi0qCYew2zYp3AbYD2vGOp4eJcVctwMV6-bvOJuuKs6MWEY6dM93Ou6oQ6Gw7cNpksHIg7es0inb43CS-zepYTb15wVmaX85CkxE_K0RWBsfB57oiSj-pVpLAANEpZXXrzl5zBOjb9L4iXOTcVcLNlCS9vNFFGak6OAHPBgMftsunUW72b0V52CTtDyHR8SrWjs11bCvApaMLWeMXYhRqyRLsQ63KTfqPgaVA2ThlcUJZI9V-WG7iTvpHTJfdDuqOpTnZsLc1k3nv42qjKSrnfS65bRgB06crpyaz2HKtTKZvmPBLGcgA6W-6SdRV8SXE9gCcR8ti8rvJitzXekXiN34p6Pvlk1CohLuOdf4AK1ejvD3Ni74O_Ed-XiEWBvvFZkN-ZA8bjdx5BUS-21ovCQV-WT8neWg7JF3OSfMYJfle5V13Glu2WdN8ZFssc1OXFWKCfKYtc-EmjTHgx32VQghrz5ePk8E3DHqJH5hDeett-mhhpI'

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: apikey,
    },
  })

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
      <Header />
      <Breadcrumbs />
      <MainContent news={news} featured={featured} />
    </>
  )
}
