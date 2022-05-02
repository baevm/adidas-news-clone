import Head from 'next/head'
import Image from 'next/image'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import MainContent from '../components/MainContent'

export default function Home() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <MainContent />
    </>
  )
}
