import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import adidasLogo from '../../public/adidas-logo.svg'
import { FiMenu, FiSearch, FiDownload, FiX } from 'react-icons/fi'
import { Container } from '../Layout/Container'
import CustomBurger from './CustomBurger'
import SearchButton from './SearchButton'

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


const Header = () => {


  return (
    <HeaderContainer>
      <Container position='relative'>
        <ItemContainer>
          <div>
          <CustomBurger />
          </div>
          <div>
            <Text>NEWS</Text>
          </div>
        </ItemContainer>

        <LogoContainer style={{}}>
          <Image src={adidasLogo} alt='adidas logo' />
        </LogoContainer>

        <ItemContainer>
          
         <SearchButton />

          <FiDownload size='1.4em' style={{ paddingLeft: '56px' }} />
        </ItemContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header
