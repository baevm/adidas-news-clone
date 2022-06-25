import dynamic from 'next/dynamic'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
import SEO from '../components/Common/SEO'
import { getLatestNewsPage } from '../lib/graphcms'
// import MainContent from '../components/LatestNewsPage/MainContent'

const MainContent = dynamic(() => import('../components/LatestNewsPage/MainContent'), { ssr: false }) // ssr false to fix bug with styledcomponents hydration
const LatestNews = ({ newsPages, pagesCount }) => {
  return (
    <>
      <SEO
        title='adidas News Site | Press Resources for all Brands, Sports and Innovations : YEEZY'
        ogtitle='YEEZY'
        description='Browse latest news of adidas YEEZY'
        ogdescription='Browse latest news of adidas YEEZY'
        url='http://localhost:3000/yeezy'
        type='website'
      />
      <Header />
      <Breadcrumbs />
      <MainContent newsPages={newsPages} pagesCount={pagesCount} />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const { newsPages, pagesCount } = await getLatestNewsPage()

  return {
    props: {
      newsPages,
      pagesCount
    }
  }
}
export default LatestNews
