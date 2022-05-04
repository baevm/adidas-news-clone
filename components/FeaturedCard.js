import React from 'react'
import Container from './Container'
import styled from 'styled-components'

const CardsTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
`

const FeaturedCard = ({ featured }) => {
  return (
    <>
    <Container>
        <CardsTitle>featured products</CardsTitle>
    </Container>
      <Container>
        {featured.map((f) => {
          return <div key={f.id}>{f.title}</div>
        })}
      </Container>
    </>
  )
}

export default FeaturedCard
