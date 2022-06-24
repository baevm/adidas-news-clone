import { useRouter } from 'next/router'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Header from '../components/Common/Header'
import SEO from '../components/Common/SEO'
import MainContent from '../components/FeaturedPage/MainContent'
import { getFeaturedPage, getFeaturedPaths } from '../lib/graphcms'

export const getStaticProps = async (pageContext) => {
  const pageSlug = pageContext.params.slug
  const data = await getFeaturedPage(pageSlug)
  const { mainPhoto, mediaPhotos, title, description, productDetails } = data.featuredPage

  return {
    props: { mainPhoto, mediaPhotos, title, description, productDetails }
  }
}

// add router.isFallback and spinner
export const getStaticPaths = async () => {
  const paths = await getFeaturedPaths()

  return {
    paths,
    fallback: false
  }
}

const FeaturedPage = ({ mainPhoto, mediaPhotos, title, description, productDetails }) => {
  const router = useRouter()

  return (
    <>
      <SEO
        title={title}
        ogtitle='YEEZY'
        description={`${description.text.substring(0, 70)}...`}
        ogdescription={`${description.text.substring(0, 70)}...`}
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
