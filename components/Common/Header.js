import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import adidasLogo from '../../public/adidas-logo.svg'
import { FiMenu, FiSearch, FiDownload, FiX } from 'react-icons/fi'
import { Container } from '../Layout/Container'

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

const LogoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 70px;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-family: adineuePRO, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
`

const SearchInput = styled.input`
  font-size: 14px;

  padding: 15px 0px 15px 50px;
  height: 100%;
  width: 100%;
  border: 1px solid black;

  @media (min-width: 768px) {
    height: 50%;
    width: auto;
  }
`

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <HeaderContainer>
      <Container position='relative'>
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

        <LogoContainer style={{}}>
          <Image src={adidasLogo} alt='adidas logo' />
        </LogoContainer>

        <ItemContainer>
          {active ? (
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                transition: '1s ease',
              }}>
              <SearchInput placeholder='SEARCH' />
              <FiSearch size='1.2em' style={{ position: 'absolute', float: 'right', marginLeft: '1rem', left: '1px' }} />
              <FiX
                size='1.2em'
                onClick={() => setActive(!active)}
                style={{ cursor: 'pointer', float: 'right', position: 'absolute', right: '1px', marginRight: '1rem' }}
              />
            </div>
          ) : (
            <FiSearch size='1.4em' onClick={() => setActive(!active)} style={{ cursor: 'pointer' }} />
          )}

          <FiDownload size='1.4em' style={{ paddingLeft: '56px' }} />
        </ItemContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header
