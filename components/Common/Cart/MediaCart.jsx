import { Modal } from '@mantine/core'
import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { useAppContext } from '../../../context/AppContext'
import CartWithItem from './CartWithItem'
import EmptyCart from './EmptyCart'


const MediaCart = () => {
  const { state } = useAppContext()
  const [open, setOpen] = useState(false)

  const { media } = state

  return (
    <>
      <FiDownload size='1.4em' style={{ paddingLeft: '56px', cursor: 'pointer' }} onClick={() => setOpen(true)} />

      {open && (
        <Modal opened={open} size='1280px' onClose={() => setOpen(false)} centered withCloseButton={false} padding={0}>
          {media.length === 0 ? (
            <EmptyCart setOpen={setOpen} />
          ) : (
           <CartWithItem setOpen={setOpen} media={media}/>
          )}
        </Modal>
      )}
    </>
  )
}

export default MediaCart
