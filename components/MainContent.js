import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CgArrowLongRight } from 'react-icons/cg'
import styled from 'styled-components'
import Container from './Container'
import FeaturedCard from './FeaturedCard'
import NewsCard from './NewsCard'

const MainContent = ({ news, featured }) => {
  const router = useRouter()
  

  return (
    <>
      <Head>
        <title>adidas News Site</title>
      </Head>
      <Container>
        <ItemContainer>
          <Title>YEEZY</Title>

          <div>
            <AiFillFacebook size={'1.8rem'} style={{ marginRight: '2rem' }} />
            <AiOutlineTwitter size={'1.8rem'} style={{ marginRight: '2rem' }} />
            <AiFillYoutube size={'1.8rem'} style={{ marginRight: '2rem' }} />
            <AiOutlineInstagram size={'1.8rem'} />
          </div>
        </ItemContainer>
      </Container>

      <div style={{ width: '100%', height: 657, position: 'relative', overflow: 'hidden' }}>
        <img src={news[6].mainPhoto.url} style={{ width: '100%', height: 657, objectFit: 'cover' }} alt='main photo' />

        <ImageTextContainer>
          <ImageTitle>
            <Link href={`/yeezy/${news[6].slug}`} passHref>
              <CustomLink>YEEZY</CustomLink>
            </Link>
          </ImageTitle>

          <ImageText>
            <Link href={`/yeezy/${news[6].slug}`} passHref>
              <CustomLink>{news[6].title}</CustomLink>
            </Link>
          </ImageText>
          <Link href={`/yeezy/${news[6].slug}`} passHref>
            <LearnMoreButton>
              Learn more
              <span style={{ marginLeft: '1.5rem', height: '25px' }}>
                <CgArrowLongRight fontSize='1.4rem' />
              </span>
            </LearnMoreButton>
          </Link>
        </ImageTextContainer>
      </div>


      <NewsCard news={news} />

      <FeaturedCard featured={featured} /> 
    </>
  )
}

const ItemContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-family: adineuePRO;
  font-weight: 700;
  line-height: 38px;
  font-size: 42px;
  letter-spacing: 1.9px;
  width: 75%;
`

const ImageTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  color: white;
  font-family: adineuePRO;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1280px;
  }
`

const ImageTitle = styled.h2`
  cursor: pointer;
  font-size: 42px;
  line-height: 38px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.4rem;
`

const ImageText = styled.p`
  margin: 0;
  cursor: pointer;
`

const CustomLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : 'white')};
`

const LearnMoreButton = styled.button`
  border: none;
  margin-top: 0.7rem;
  background-color: white;
  text-transform: uppercase;
  padding: 1rem;
  display: flex;
  align-items: center;
  line-height: 25px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: adineuePRO;
  cursor: pointer;
  color: black;
  transition: 0.2s all;

  &:active {
    transform: scale(0.95);
  }
`



export default MainContent
