import React from 'react'
import { Container } from '../Layout/Container'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const CardsTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
`

const CustomLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 30px;
  font-weight: 700;
  text-decoration: underline;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  word-wrap: break-word;
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CardImage = styled(Image)`
  background-size: 'contain';
  object-fit: cover;
  filter: brightness(90%);

  transform-origin: 50% 65%;
  transition: transform 1s, filter 1s ease-out;
`

const ImageText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-decoration: underline;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 30px;
  margin-bottom: 1.5rem;
`

const FeaturedCard = ({ featured }) => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <Container>
        <CardsTitle>featured products</CardsTitle>
      </Container>
      <Container>
        <CardsContainer>
          {featured.map((f) => {
            return (
              <Card key={f.id}>
                <Link href={f.slug} passHref as={f.slug}>
                  <CustomLink>
                    <CardImage src={f.mainPhoto.url} alt={f.title} width={300} height={400} quality={100} />
                    <ImageText>{f.title}</ImageText>
                  </CustomLink>
                </Link>
              </Card>
            )
          })}
        </CardsContainer>
      </Container>
    </div>
  )
}

export default FeaturedCard
