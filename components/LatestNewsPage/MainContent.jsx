import React from 'react'
import styled from 'styled-components'
import { Container } from '../Layout/Container'
import { Title } from '../Layout/Title'

const Container25 = styled.div`
  @media (min-width: 992px) {
    display: block !important;
  }

  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  
`

const Container75 = styled.div`
  margin-top: 3rem;
  border: 1px solid #ededed;

  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    flex: 0 0 75%;
    max-width: 75%;
  }

  
`

const FilterWrapper = styled.div`
  border: 1px solid #ededed;
  margin-top: 3rem;
  margin-right: 2rem;
`

const MainContent = () => {
  return (
    <>
      <Container>
        <Title transform='uppercase'>news</Title>
      </Container>
      <Container>
        <Container25>
          <FilterWrapper>Refine</FilterWrapper>
        </Container25>

        
        <Container75>aseadas</Container75>
      </Container>
    </>
  )
}

export default MainContent
