import React from 'react'
import Breadcrumbs from '../components/Common/Breadcrumbs'
import Header from '../components/Common/Header'
import MainContent from '../components/LatestNewsPage/MainContent'

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