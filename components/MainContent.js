import React from 'react'
import Container from './Container'
import styled from 'styled-components'
import Head from 'next/head'
import { FiCornerUpLeft } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'

const ItemContainer = styled.div`
  margin-top: 0.5rem;
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

const MainContent = () => {
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
    </>
  )
}

export default MainContent
