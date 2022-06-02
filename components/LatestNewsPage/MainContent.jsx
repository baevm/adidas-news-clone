import React from 'react'
import { VscClose } from 'react-icons/vsc'
import styled from 'styled-components'
import { Container } from '../Layout/Container'
import { Title } from '../Layout/Title'
import MenuAccordion from './MenuAccordion'

const Container25 = styled.div`
  margin-top: 3rem;
  @media (min-width: 992px) {
    display: block !important;
  }

  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`

const Container75 = styled.div`
  margin-top: 3rem;
  border: 1px solid #ededed;

  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`

const FilterWrapper = styled.div`
  border: 1px solid #ededed;
  margin-right: 2rem;
  padding: ${(props) => (props.p ? props.p : '')};
  display: ${(props) => (props.display ? props.display : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${(props) => (props.align ? props.align : '')};
`

const Text = styled.h4`
  margin: 0;
  text-transform: uppercase;
  font-family: adineuePRO;
  letter-spacing: 1.5px;
  font-size: 18px;
  line-height: 1;
`

const TagWrapper = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.7px;
  border: 1px solid #ededed;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
`

const ClearButton = styled.button`
  border: 0;
  background-color: white;
  font-size: 12px;
  text-decoration: underline;
  letter-spacing: 1px;
  cursor: pointer;
`

const MainContent = () => {
  return (
    <>
      <Container>
        <Title transform='uppercase'>news</Title>
      </Container>
      <Container align='flex-start'>
        <Container25>
          <FilterWrapper p='1rem'>
            <Text>Refine</Text>
          </FilterWrapper>

          <FilterWrapper display='flex' justify='space-between' align='center' p='1rem'>
            <TagWrapper>
              <VscClose fontSize='24px' />

              <span>yeezy</span>
            </TagWrapper>
            <ClearButton>Clear All</ClearButton>
          </FilterWrapper>

          <FilterWrapper>
            <MenuAccordion />
          </FilterWrapper>
          
        </Container25>

        <Container75>aseadas</Container75>
      </Container>
    </>
  )
}

export default MainContent
