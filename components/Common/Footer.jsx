import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { IoLogoRss } from 'react-icons/io'
import styled from 'styled-components'
import { Container } from '../Layout/Container'

const Footersub = styled.div`
  width: 100%;
  background-color: #ede548;
  padding: 40px 0px 42px;
`

const SubscribeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`

const LinksContainer = styled.div`
  background-color: black;
  padding: 2rem;
  color: #ccc;
`

const Text = styled.h4`
  margin: 0;
  height: 30px;
  text-transform: uppercase;
  font-size: 1.7rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  font-family: adineuePRO;
`

const SubscribeTextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 992px) {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
`

const Input = styled.input`
  letter-spacing: 2px;
  font-family: adineuePRO;
  font-size: 13px;
  border: none;
  padding: 1rem;

  width: 66.66667%;
`

const Button = styled.button`
  letter-spacing: 1.8px;
  padding: 0 2rem;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  width: 33.33333%;
`

const SubscribeInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 0;
  }
  @media (min-width: 992px) {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    margin-top: 0;
  }
`

const LinkInfo = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1280px;
  }
`

const LinkItem = styled.div`
  margin-top: 1.5rem;
  margin-right: 1rem;
  font-size: 14px;
`

const CustomLink = styled.a`
  color: #6c757d;
  margin-right: 0.2rem;
  &:hover {
    color: white;
  }

  @media (min-width: 768px) {
    margin-right: ${(props) => (props.mr ? props.mr : '')};
  }
`

const links = [
  { id: 1, icon: <AiFillFacebook size='1.8rem' />, link: 'https://www.facebook.com/adidas' },
  { id: 2, icon: <AiOutlineTwitter size='1.8rem' />, link: 'https://twitter.com/adidas' },
  { id: 3, icon: <AiFillYoutube size='1.8rem' />, link: 'https://www.facebook.com/adidas' },
  { id: 4, icon: <AiOutlineInstagram size='1.8rem' />, link: 'https://www.youtube.com/c/adidas' },
  { id: 5, icon: <FaTiktok size='1.8rem' />, link: 'https://vm.tiktok.com/ZMdVgF6Em/' },
  { id: 6, icon: <AiFillLinkedin size='1.8rem' />, link: 'https://www.linkedin.com/company/adidas/' },
  { id: 7, icon: <IoLogoRss size='1.8rem' />, link: 'https://news.adidas.com/rss' },
]

const infos = [
  { text: '© 2022 adidas', link: '' },
  { text: 'Contact', link: '' },
  { text: 'Corporate News', link: 'http://www.adidas-group.com/en/media/news-archive/' },
  { text: 'Gameplan A', link: 'https://www.gameplan-a.com/' },
  { text: 'adidas.com', link: 'https://www.adidas.com/' },
  { text: 'Legal', link: 'http://www.adidas-group.com/en/service/legal-notice/' },
  { text: 'Cookies', link: 'https://news.adidas.com/cookiepolicy' },
]

const Footer = () => {
  return (
    <footer>
      <Footersub>
        <Container>
          <SubscribeContainer>
            <SubscribeTextContainer>
              <Text>sign up & personalize your news alerts</Text>
            </SubscribeTextContainer>

            <SubscribeInputWrapper>
              <Input placeholder='EMAIL ADDRESS' />
              <Button>Submit</Button>
            </SubscribeInputWrapper>
          </SubscribeContainer>
        </Container>
      </Footersub>
      <LinksContainer>
        <Container>
          <div>
            {links.map((link) => (
              <CustomLink key={link.id} href={link.link} target='_blank' rel='noreferrer' mr='2rem'>
                {link.icon}
              </CustomLink>
            ))}
          </div>
        </Container>
        <LinkInfo>
          {infos.map((info) => (
            <CustomLink key={info.text} href={info.link} target='_blank' rel='noreferrer'>
              <LinkItem>{info.text}</LinkItem>
            </CustomLink>
          ))}
        </LinkInfo>
      </LinksContainer>
    </footer>
  )
}

export default Footer


