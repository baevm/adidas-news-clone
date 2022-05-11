import React from 'react'
import { Container } from '../Layout/Container'
import { Title } from '../Layout/Title'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineShareAlt } from 'react-icons/ai'
import { Container55 } from '../Layout/Container55'
import { Container45 } from '../Layout/Container45'
import styled from 'styled-components'
import Image from 'next/image'
import Footer from '../Common/Footer'


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

const MainContent = ({ mainPhoto, mediaPhotos, title, description, productDetails }) => {
  return (
    <>
      <Container mb='2rem' direction='column' align='flex-start'>
        <Title>{title}</Title>
        <div>
          <AiFillFacebook fontSize={'1.8rem'} style={{ marginRight: '2rem' }} />
          <AiOutlineTwitter fontSize={'1.8rem'} style={{ marginRight: '2rem' }} />
          <AiOutlineShareAlt fontSize={'1.8rem'} />
        </div>
      </Container>
      <div>
        <img src={mainPhoto.url} style={{ width: '100%', height: 740, objectFit: 'cover' }} />
      </div>

      <Container mb='4rem' align='flex-start' mt='2rem'>
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
