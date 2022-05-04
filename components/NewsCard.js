import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Image from 'next/image'

const CardContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Card = styled.div`
  flex: 0 0 33.3%;
  max-width: 33.33333%;
  margin-bottom: 2rem;
`

const CardTitle = styled.h5`
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 0;
`

const CardsTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
`

const NewsCard = ({ news }) => {
  return (
    <>
      <Container>
        <CardsTitle>latest news</CardsTitle>
      </Container>

      <Container>
        <CardContainer>
          {news.slice(0, 6).map((n) => {
            return (
              <Card key={n.id}>
                <Image src={n.mainPhoto.url} alt={n.title} unoptimized width={410} height={250}/>
                <CardTitle>{n.title}</CardTitle>
              </Card>
            )
          })}
        </CardContainer>
      </Container>
    </>
  )
}

export default NewsCard
