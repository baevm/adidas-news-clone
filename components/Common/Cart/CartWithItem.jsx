import { ActionIcon, Grid } from '@mantine/core'
import React from 'react'
import Image from 'next/image'
import { CgArrowLongRight } from 'react-icons/cg'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { Title } from '../../Layout/Title'
import { useAppContext } from '../../../context/AppContext'

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
  overflow-y: scroll;
  @media only screen and (min-width: 992px) {
    height: 615px;
  }
`

const ItemText = styled.h5`
  margin: 0;
`
const CartWithItem = ({ setOpen, media }) => {
  const {state, dispatch} = useAppContext()

  const handleRemove = () =>{
    dispatch({type: 'REMOVE_ALL_MEDIA'})
  }
  
  return (
    <>
      <ModalHeader>
        <TitleContainer>
          <Title transform='uppercase' color='white'>
            media cart
          </Title>
          <div>
            <ActionIcon variant='transparent' onClick={() => setOpen(false)} title='close modal button'>
              <FiX color='white' size='1.8rem' />
            </ActionIcon>
          </div>
        </TitleContainer>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flex: '0 0 50%', maxWidth: '50%' }}>
            <ContinueButton mr='10px'>
              Download all files
              <CgArrowLongRight size='1rem' style={{ marginLeft: '2.5rem' }} />
            </ContinueButton>

            <ContinueButton onClick={handleRemove}>
              Empty media cart
              <CgArrowLongRight size='1rem' style={{ marginLeft: '3.8rem' }} />
            </ContinueButton>
          </div>

          <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
            <ContinueButton bgcolor='black' color='white' border='1px solid white' width='100%'>
              Send media cart
              <CgArrowLongRight size='1rem' sx={{ float: 'right' }} />
            </ContinueButton>
          </div>
        </div>
      </ModalHeader>
      <ModalContent justify='flex-start' maxWidth='100%'>
        <Grid md={6} lg={3}>
          {media.map((item) => (
            <Grid.Col span={3} key={item.url}>
              <Image src={item.url} objectFit='cover' width={275} height={205} />
              <ItemText>{item.imgtitle}</ItemText>
            </Grid.Col>
          ))}
        </Grid>
      </ModalContent>
    </>
  )
}

export default CartWithItem
