import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CgArrowLongRight } from 'react-icons/cg'
import styled from 'styled-components'
import { Title } from '../Layout/Title'
import { Container } from '../Layout/Container'
import FeaturedCard from './FeaturedCard'
import NewsCard from './NewsCard'

const MainContent = ({ news, featured }) => (
  <>
    <Container>
      <ItemContainer>
        <Title>YEEZY</Title>
        <IconLinks>
          <CustomIconLink href='https://www.facebook.com/adidas' target='_blank' rel='noreferrer'>
            <AiFillFacebook size='1.8rem' style={{ marginRight: '2rem', color: 'black' }} />
          </CustomIconLink>
          <CustomIconLink href='https://twitter.com/adidas' target='_blank' rel='noreferrer'>
            <AiOutlineTwitter size='1.8rem' style={{ marginRight: '2rem', color: 'black' }} />
          </CustomIconLink>
          <CustomIconLink href='https://www.youtube.com/c/adidas' target='_blank' rel='noreferrer'>
            <AiFillYoutube size='1.8rem' style={{ marginRight: '2rem', color: 'black' }} />
          </CustomIconLink>
          <CustomIconLink href='https://www.instagram.com/adidas/' target='_blank' rel='noreferrer'>
            <AiOutlineInstagram size='1.8rem' style={{ color: 'black' }} />
          </CustomIconLink>
        </IconLinks>
      </ItemContainer>
    </Container>

    <MainImageContainer>
      <Image src={news[6].mainPhoto.url} alt='main photo' layout='fill' objectFit='cover' quality={75} />

      <ImageTextContainer>
        <ImageTitle>
          <Link href={`/yeezy/${news[6].slug}`} passHref as={`/yeezy/${news[6].slug}`}>
            <CustomLink>YEEZY</CustomLink>
          </Link>
        </ImageTitle>

        <ImageText>
          <Link href={`/yeezy/${news[6].slug}`} passHref as={`/yeezy/${news[6].slug}`}>
            <CustomLink>{news[6].title}</CustomLink>
          </Link>
        </ImageText>
        <Link href={`/yeezy/${news[6].slug}`} passHref as={`/yeezy/${news[6].slug}`}>
          <LearnMoreButton>
            Learn more
            <span style={{ marginLeft: '1.5rem', height: '25px' }}>
              <CgArrowLongRight fontSize='1.4rem' />
            </span>
          </LearnMoreButton>
        </Link>
      </ImageTextContainer>
    </MainImageContainer>

    <NewsCard news={news} />
    <FeaturedCard featured={featured} />
  </>
)

const ItemContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const IconLinks = styled.div`
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin: 0;
  }
`

const CustomIconLink = styled.a`
  &:hover {
    opacity: 50%;
  }
`

const MainImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 725px;
  }
`

const ImageTextContainer = styled.div`
  position: relative;
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
  font-family: adineuePRO;

  @media (min-width: 320px) {
    max-width: 540px;
    position: absolute;
    justify-content: end;
  }

  @media (min-width: 576px) {
    max-width: 540px;
    position: relative;
    justify-content: center;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    position: absolute;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    position: absolute;
  }
  @media (min-width: 1200px) {
    max-width: 1280px;
    position: absolute;
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
  color: ${(props) => (props.color ? props.color : 'black')};

  @media (min-width: 768px) {
    color: white;
  }
`

const LearnMoreButton = styled.button`
  border: none;
  margin-top: 0.7rem;
  background-color: black;
  text-transform: uppercase;
  padding: 1rem;
  display: flex;
  align-items: center;
  line-height: 25px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: adineuePRO;
  cursor: pointer;
  color: white;
  transition: 0.2s all;

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    color: black;
    background-color: white;
  }
`

export default MainContent
