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
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Card = styled.div`
  flex: 0 0 32%;
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
  text-decoration: ${(props) => (props.decoration ? props.decoration : 'none')};
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: ${(props) => (props.size ? props.size : '')};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : '')};
  font-weight: ${(props) => (props.weight ? props.weight : '')};
  text-transform: uppercase;
  cursor: pointer;
`

const NewsCard = ({ news }) => {
  return (
    <>
      <Container>
        <CardsTitle>
          <Link href={{ pathname: '/latest-news', query: { brands: 'yeezy' } }} passHref>
            <CustomLink color='black'>latest news</CustomLink>
          </Link>
        </CardsTitle>
        <Link href={{ pathname: '/latest-news', query: { brands: 'yeezy' } }} passHref>
          <CustomLink color='black' size='14px' spacing='1.5px' decoration='uppercase' weight='700'>
            see all
          </CustomLink>
        </Link>
      </Container>

      <Container>
        <CardContainer>
          {news.slice(0, 6).map((n) => (
            <Card key={n.id}>
              <Link href={`/yeezy/${n.slug}`} passHref as={`/yeezy/${n.slug}`}>
                <CustomLink color='black'>
                  <Image src={n.mainPhoto.url} alt={n.title} quality={100} width={425} height={260} objectFit='cover' />
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
