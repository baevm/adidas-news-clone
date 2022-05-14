import { ActionIcon, Modal } from '@mantine/core'
import React, { useState } from 'react'
import { FiDownload, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { Title } from '../Layout/Title'
import { CgArrowLongRight } from 'react-icons/cg'

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
  background-color: white;
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
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
   @media only screen and (min-width: 992px) {
    height: 615px;
  }
`

const MediaCart = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <FiDownload size='1.4em' style={{ paddingLeft: '56px', cursor: 'pointer' }} onClick={() => setOpen(true)} />

      {open && (
        <Modal opened={open} size='1280px' onClose={() => setOpen(false)} centered withCloseButton={false} padding={0}>
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
              This media cart seems empty. Start filling it by clicking {`"`}add to media cart{`"`} button and share your cart with as many friends or
              colleagues as you like for them to directly download your content.
            </p>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default MediaCart
