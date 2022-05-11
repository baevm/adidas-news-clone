import React from 'react'
import { Title } from '../Layout/Title'
import { Container } from '../Layout/Container'
import styled from 'styled-components'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineShareAlt } from 'react-icons/ai'
import { Container55 } from '../Layout/Container55'
import parse from 'html-react-parser'
import Footer from '../Common/Footer'
import { Container45 } from '../Layout/Container45'
import Image from 'next/image'

const DateText = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: 0.6px;
  font-size: 12px;
`

const DownloadText = styled.h4`
  font-size: 1.2rem;
  letter-spacing: 1.1px;
  font-family: adineuePRO;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
`

const LinkText = styled.a`
  font-size: 0.8rem;
  color: black;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: adineuePRO;
  font-weight: 700;
  text-decoration: underline;
  margin-right: 15px;
  cursor: pointer;
`

const MediaPhotoItem = styled(Image)`
  object-fit: cover;
  margin: '10px 10px 0 0';
`

const MainContent = ({ title, date, mainPhoto, description, mediaPhotos }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>
      <Container>
        <DateText>{date}</DateText>
        <div>
          <AiFillFacebook fontSize={'1.8rem'} style={{ marginRight: '2rem' }} />
          <AiOutlineTwitter fontSize={'1.8rem'} style={{ marginRight: '2rem' }} />
          <AiOutlineShareAlt fontSize={'1.8rem'} />
        </div>
      </Container>
      <Container mb='1.5rem'>
        <img src={mainPhoto.url} style={{ width: '100%', height: 657, objectFit: 'cover' }} />
      </Container>

      <Container mb='4rem' align='flex-start'>
        <Container55 direction='column'>
          <div dangerouslySetInnerHTML={{ __html: description.html }} className='description' />
        </Container55>

        <Container45 direction='column' wrap='wrap'>
          <DownloadText>Download Media</DownloadText>
          <div>
            <LinkText>Add All To Cart</LinkText>
            <LinkText>Download All</LinkText>
          </div>
          <div>
            {mediaPhotos.map((photo) => (
              <span key={photo.id} style={{ margin: '10px 10px 0 0' }}>
                <MediaPhotoItem src={photo.url} width={140} height={140} alt='media pic' />
              </span>
            ))}
          </div>
        </Container45>
      </Container>
      <Footer />
    </>
  )
}

export default MainContent
