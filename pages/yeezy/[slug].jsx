import { useRouter } from 'next/router'
import Breadcrumbs from '../../components/Common/Breadcrumbs'
import Header from '../../components/Common/Header'
import SEO from '../../components/Common/SEO'
import MainContent from '../../components/NewsPage/MainContent'
import { getNewsPage, getNewsPaths } from '../../lib/graphcms'

export const getStaticProps = async (pageContext) => {
  const pageSlug = pageContext.params.slug

  const data = await getNewsPage(pageSlug)
  const { mainPhoto, mediaPhotos, title, description, date } = data.newPage

  return {
    props: { mainPhoto, mediaPhotos, title, description, date }
  }
}

export const getStaticPaths = async () => {
  const paths = await getNewsPaths()

  return {
    paths,
    fallback: false
  }
}

const NewsPage = ({ mainPhoto, mediaPhotos, title, description, date }) => {
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
      <>
        <Header />
        <Breadcrumbs />
        <MainContent title={title} date={date} mainPhoto={mainPhoto} description={description} mediaPhotos={mediaPhotos} />
      </>
    </>
  )
}

export default NewsPage
