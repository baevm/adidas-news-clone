import React from 'react'
import Container from './Container'
import styled from 'styled-components'
import Head from 'next/head'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
`

const MainContent = () => {
  return (
    <>
      <Head>
        <title>adidas News Site</title>
      </Head>
      <Container>
        <ItemContainer>
          <p>Back</p>
          <p>Home</p>
          <p>Back</p>
        </ItemContainer>
      </Container>
    </>
  )
}

export default MainContent
