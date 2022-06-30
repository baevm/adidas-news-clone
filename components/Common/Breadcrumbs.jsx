import React from 'react'
import styled from 'styled-components'
import { FiCornerUpLeft } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '../Layout/Container'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  // sm
  @media (min-width: 768px) {
    margin-top: 5.5rem;
  }
`

const BreadCrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Customlink = styled.a`
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: ${(props) => (props.color ? props.color : 'black')};
  text-decoration: ${(props) => (props.decoration ? props.decoration : '')};
  text-transform: ${(props) => (props.transform ? props.transform : '')};
`

const Breadcrumbs = () => {
  const router = useRouter()

  return (
    <Container>
      <ItemContainer>
        <BreadCrumb onClick={() => router.back()}>
          <FiCornerUpLeft />
          <Link href='/#' scroll={false} passHref>
            <Customlink>Back</Customlink>
          </Link>
          <p>|</p>
        </BreadCrumb>

        <BreadCrumb>
          <Link href='/' passHref>
            <Customlink>Home</Customlink>
          </Link>
        </BreadCrumb>

        <BreadCrumb>
          {'>'}
          <Link href='/yeezy' passHref>
            <Customlink color={router.pathname === '/yeezy' ? '#98989a' : 'black'} decoration={router.pathname === '/yeezy' ? 'none' : 'underline'}>
              YEEZY
            </Customlink>
          </Link>
        </BreadCrumb>

        {router.pathname === '/[slug]' && (
          <BreadCrumb>
            {'>'}
            <Customlink color='#98989a' transform='uppercase'>
              {router.query.slug.replace(/-/gi, ' ')}
            </Customlink>
          </BreadCrumb>
        )}
      </ItemContainer>
    </Container>
  )
}

export default Breadcrumbs
