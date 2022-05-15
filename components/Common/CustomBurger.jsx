import React, { useState } from 'react'
import { Burger, Accordion, AccordionItem } from '@mantine/core'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '../../hooks/useOutsideClick'

const MenuContainer = styled.div`
  border: 1px solid black;
  position: absolute;
  background-color: white;
  padding: 20px 30px;
  top: 25px;
  left: 20px;
  z-index: 10;

  @media only screen and (min-width: 992px) {
    max-width: 320px;
  }
`

const AccordionLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`

const AccordionLink = styled.a`
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`

export default function CustomBurger() {
  const accordionItems = [
    {
      id: 1,
      title: 'Sports',
      links: [
        { name: 'American Football', link: '' },
        { name: 'Baseball', link: '' },
        { name: 'Basketball', link: '' },
        { name: 'Football', link: '' },
        { name: 'Golf', link: '' },
        { name: 'Ice Hockey', link: '' },
        { name: 'Outdoor', link: '' },
        { name: 'Rugby', link: '' },
        { name: 'Running', link: '' },
        { name: 'Skateboarding', link: '' },
        { name: 'Swimming', link: '' },
        { name: 'Tennis', link: '' },
        { name: 'Training', link: '' },
      ],
    },
    {
      id: 2,
      title: 'Brands',
      links: [
        { name: 'Originals', link: '' },
        { name: 'adidas by', link: '' },
        { name: 'adidas by Stella McCartney', link: '' },
        { name: 'adidas Pharell Williams', link: '' },
        { name: 'Athletics', link: '' },
        { name: 'Y-3', link: '' },
        { name: 'YEEZY', link: '' },
      ],
    },
    {
      id: 3,
      title: 'Product streams',
      links: [
        { name: 'Footwear', link: '' },
        { name: 'Apparel', link: '' },
        { name: 'Teams', link: '' },
      ],
    },
    {
      id: 4,
      title: 'Innovations',
      links: [
        { name: 'FUTURECRAFT', link: '' },
        { name: '4D', link: '' },
        { name: 'Boost', link: '' },
        { name: 'Primeknit', link: '' },
        { name: 'Clima', link: '' },
        { name: 'Made with Recycled Materials', link: '' },
        { name: 'Made To Be Remade', link: '' },
        { name: 'Made With Nature', link: '' },
      ],
    },
  ]
  const [opened, setOpened] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const closeBurger = () => {
    setOpened(false)
  }

  const ref = useOutsideClick(closeBurger)

  return (
    <div ref={ref}>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        sx={{
          borderRadius: 0,
          marginRight: '3.5rem',
          border: `${opened ? '1px solid black' : ''}`,
          zIndex: 1000,
        }}
      />
      <AnimatePresence>
        {opened && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <MenuContainer>
              <Accordion iconPosition='right'>
                {accordionItems.map((item) => (
                  <AccordionItem
                    label={<AccordionLabel>{item.title}</AccordionLabel>}
                    onClick={() => setExpanded(!expanded)}
                    sx={{
                      border: 0,
                    }}
                    key={item.id}>
                    {expanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        {item.links.map((sport) => (
                          <div key={sport.name}>
                            <AccordionLink>{sport.name}</AccordionLink>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </MenuContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
