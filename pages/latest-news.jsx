import dynamic from 'next/dynamic'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
import { getLatestNewsPage } from '../lib/graphcms'
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
  const newsPages = await getLatestNewsPage()

  return {
    props: {
      newsPages
    }
  }
}
export default LatestNews
