import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../Layout/Container'

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

const CustomLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : 'white')};
  cursor: pointer;
`

const NewsCard = ({ news }) => {
  return (
    <>
      <Container>
        <CardsTitle>latest news</CardsTitle>
      </Container>

      <Container>
        <CardContainer>
          {news.slice(0, 6).map((n) => (
            <Card key={n.id}>
              <Link href={`/yeezy/${n.slug}`} passHref as={`/yeezy/${n.slug}`}>
                <CustomLink color='black'>
                  <Image src={n.mainPhoto.url} alt={n.title} quality={100} width={410} height={250} />
                  <CardTitle>{n.title}</CardTitle>
                </CustomLink>
              </Link>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  )
}

export default NewsCard
