import React from 'react'
import { Container } from '../Layout/Container'
import styled from 'styled-components'
import { FiCornerUpLeft } from 'react-icons/fi'
import Link from 'next/link'


const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5rem;
`

const BreadCrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Customlink = styled.a`
  font-size: 0.8rem;
  color: black;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`

const Breadcrumbs = () => {
  return (
    <div style={{ marginTop: '4.5rem' }}>
      <Container>
        <ItemContainer>
          <BreadCrumb onClick={() => router.back()}>
            <FiCornerUpLeft />
            <Link href={'/#'} scroll={false} passHref>
              <Customlink>Back</Customlink>
            </Link>
            <p>|</p>
          </BreadCrumb>

          <BreadCrumb>
            <Link href={'/'} passHref>
              <Customlink>Home</Customlink>
            </Link>
          </BreadCrumb>

          <BreadCrumb>
            {'>'}
            <Link href={'/yeezy'} passHref>
              <Customlink>YEEZY</Customlink>
            </Link>
          </BreadCrumb>
        </ItemContainer>
      </Container>
    </div>
  )
}

export default Breadcrumbs
