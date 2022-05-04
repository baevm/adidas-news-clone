import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import adidasLogo from '../public/adidas-logo.svg'
import { FiMenu, FiSearch, FiDownload } from 'react-icons/fi'
import Container from './Container'

const HeaderContainer = styled.div`
  height: 80px;
  border-bottom: 1px solid #d9dcdd;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1000;
 top: 0;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-family: adineuePRO, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <ItemContainer>
          <div>
            <a>
              <FiMenu size='1.7em' style={{ marginRight: '3.5rem' }} />
            </a>
          </div>
          <div>
            <Text>NEWS</Text>
          </div>
        </ItemContainer>

        <ItemContainer>
          <Image src={adidasLogo} alt='adidas logo' />
        </ItemContainer>

        <ItemContainer>
          <FiSearch size='1.4em' />
          <FiDownload size='1.4em' style={{ paddingLeft: '56px' }} />
        </ItemContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header
