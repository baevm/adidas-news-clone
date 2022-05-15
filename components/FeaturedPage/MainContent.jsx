import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillFacebook, AiOutlineShareAlt, AiOutlineTwitter } from 'react-icons/ai'
import styled from 'styled-components'
import Footer from '../Common/Footer'
import SneakerPopup from '../Common/SneakerPopup'
import { Container } from '../Layout/Container'
import { Container45 } from '../Layout/Container45'
import { Container55 } from '../Layout/Container55'
import { Title } from '../Layout/Title'

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
  cursor: pointer;
`

const MainContent = ({ mainPhoto, mediaPhotos, title, description /* productDetails */ }) => {
  const [open, setOpen] = useState(false)
  const [clicked, setClicked] = useState()

  const ClickHandle = (index) => {
    setOpen(true)
    setClicked(index)
  }
  return (
    <>
      <Container mb='2rem' direction='column' align='flex-start'>
        <Title>{title}</Title>
        <div>
          <AiFillFacebook fontSize='1.8rem' style={{ marginRight: '2rem' }} />
          <AiOutlineTwitter fontSize='1.8rem' style={{ marginRight: '2rem' }} />
          <AiOutlineShareAlt fontSize='1.8rem' />
        </div>
      </Container>
      <div>
        <img src={mainPhoto.url} style={{ width: '100%', height: 740, objectFit: 'cover' }} alt={title} />
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
            {mediaPhotos.map((photo, index) => (
              <span key={photo.id} style={{ margin: '10px 10px 0 0', cursor: 'pointer' }} onClick={() => ClickHandle(index)}>
                <MediaPhotoItem src={photo.url} width={140} height={140} alt='media pic' />
              </span>
            ))}
          </div>
        </Container45>
      </Container>
      <SneakerPopup open={open} setOpen={setOpen} clicked={clicked} setClicked={setClicked} mediaPhotos={mediaPhotos} title={title} />
      <Footer />
    </>
  )
}

export default MainContent
