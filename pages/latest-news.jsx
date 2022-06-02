import dynamic from 'next/dynamic'
import React from 'react'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Header from '../components/Common/Header'
// import MainContent from '../components/LatestNewsPage/MainContent'

const MainContent = dynamic(() => import('../components/LatestNewsPage/MainContent'), { ssr: false }) // ssr false to fix bug with styledcomponents hydration
const latestNews = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <MainContent />
    </>
  )
}

export default latestNews
