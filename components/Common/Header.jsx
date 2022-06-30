import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import adidasLogo from '../../public/adidas-logo.svg'
import { Container } from '../Layout/Container'
import MediaCart from './Cart/MediaCart'
import CustomBurger from './CustomBurger'
import SearchButton from './SearchButton'

const HeaderContainer = styled.div`
  height: 80px;
  border-bottom: 1px solid #d9dcdd;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1;
  top: 0;

  // sm
  @media (min-width: 768px) {
    position: fixed;
  }
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
  font-size: 0.875rem;
  letter-spacing: 1px;
  padding-left: 1rem;
`

const Header = () => (
  <HeaderContainer>
    <Container position='relative'>
      <ItemContainer>
        <CustomBurger />
        <Text>NEWS</Text>
      </ItemContainer>

      <LogoContainer>
        <Link href='/yeezy' passHref>
          <a>
            <Image src={adidasLogo} alt='adidas logo' />
          </a>
        </Link>
      </LogoContainer>

      <ItemContainer>
        <SearchButton />
        <MediaCart />
      </ItemContainer>
    </Container>
  </HeaderContainer>
)

export default Header
