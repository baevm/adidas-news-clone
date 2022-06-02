import { ActionIcon } from '@mantine/core'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { Title } from '../../Layout/Title'

const ModalHeader = styled.div`
  background-color: black;
  padding: 2rem;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ContinueButton = styled.button`
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 700;
  padding: 1rem;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'white')};
  color: ${(props) => (props.color ? props.color : 'black')};
  border: ${(props) => (props.border ? props.border : '1px')};
  width: ${(props) => (props.width ? props.width : '')};
  margin-right: ${(props) => (props.mr ? props.mr : '')};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;

  &:active {
    transform: scale(0.97);
  }
`

const ModalContent = styled.div`
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '560px')};
  @media only screen and (min-width: 992px) {
    height: 615px;
  }
`

const EmptyCart = ({setOpen}) => {
  return (
    <>
      <ModalHeader>
        <TitleContainer>
          <Title transform='uppercase' color='white'>
            Your media cart is empty
          </Title>
          <div>
            <ActionIcon variant='transparent' onClick={() => setOpen(false)} title='close modal button'>
              <FiX color='white' size='1.8rem' />
            </ActionIcon>
          </div>
        </TitleContainer>

        <ContinueButton>
          Continue searching
          <CgArrowLongRight size='1rem' style={{ marginLeft: '2.5rem' }} />
        </ContinueButton>
      </ModalHeader>
      <ModalContent>
        <Title transform='uppercase'>add content.</Title>
        <Title transform='uppercase'>download content.</Title>
        <Title transform='uppercase'>send content.</Title>
        <p>
          This media cart seems empty. Start filling it by clicking &quot;add to media cart&quot; button and share your cart with as many friends or colleagues
          as you like for them to directly download your content.
        </p>
      </ModalContent>
    </>
  )
}

export default EmptyCart
