import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'

const ImageContainer = styled.div`
  max-width: calc(100% - 362px);
  max-height: 689px;
`

const AlertContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const AddAlert = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 25%;
  height: 8%;
  font-size: 12px;
  font-weight: bold;
  font-family: adineuePRO;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: white;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`

const PopupImage = ({ clicked, mediaPhotos, title, setCurrent, addedAlert, setCurrentId }) => {
  const [speed, setSpeed] = useState(700) // speed for carousel. set default as 700. on carousel mount set as 1000 otherwise its bugged and resets to 0
  const [watchAddedAlert, setWatchAddedAlert] = useState(addedAlert)

  useEffect(() => {
    setWatchAddedAlert(addedAlert)
  }, [addedAlert])

  return (
    <ImageContainer>
      <Splide
        options={{ start: clicked, speed, rewind: true, rewindSpeed: 1200, drag: false }}
        onMounted={() => {
          setCurrent(clicked + 1)
          setCurrentId(mediaPhotos[clicked].url)
          setSpeed(1000)
        }}
        onDestroy={() => {
          setSpeed(0)
        }}
        onMove={(newIndex) => {
          setCurrent(newIndex.index + 1)
          setCurrentId(mediaPhotos[newIndex.index].url)
        }}>
        {mediaPhotos
          ? mediaPhotos.map((photo) => (
              <SplideSlide key={photo.id}>
                <Image
                  src={photo.url}
                  width={918}
                  height={689}
                  quality={100}
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89+7JfwAJUwPBIkgrewAAAABJRU5ErkJggg=='
                  alt={title}
                />
                <AlertContainer>
                  <AnimatePresence>
                    {watchAddedAlert && (
                      <AddAlert initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FiDownload fontSize='18px' style={{ marginRight: '1rem', marginLeft: '1rem' }} />
                        added to media cart
                      </AddAlert>
                    )}
                  </AnimatePresence>
                </AlertContainer>
              </SplideSlide>
            ))
          : ''}
      </Splide>
    </ImageContainer>
  )
}

export default PopupImage
