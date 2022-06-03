import { Accordion, AccordionItem, Checkbox } from '@mantine/core'
import React from 'react'
import styled from 'styled-components'

const DateBurger = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Past 7 Days' },
  { id: 3, title: 'Past 30 Days' },
  { id: 4, title: 'Past 3 Months' },
  { id: 5, title: 'Past 6 Months' },
  { id: 6, title: 'Past 12 Months' }
]

const BrandsBurger = [
  { id: 1, title: 'Originals' },
  { id: 2, title: 'YEEZY' }
]

const InnovationsBurger = [
  { id: 1, title: 'Boost' },
  { id: 2, title: 'Primeknit' }
]

const BurgerItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`

const BurgetText = styled.p`
  margin: 0;
  padding: 0;
  letter-spacing: 0.2px;
  font-size: 14px;
`

const MenuAccordion = () => {
  return (
    <Accordion iconPosition='right'>
      <AccordionItem label='DATE'>
        {DateBurger.map((item) => (
          <BurgerItem key={item.id}>
            <Checkbox color='dark' size='lg' sx={{ marginRight: '0.5rem' }} />
            <BurgetText>{item.title}</BurgetText>
          </BurgerItem>
        ))}
      </AccordionItem>

      <AccordionItem label='BRANDS'>
        {BrandsBurger.map((item) => (
          <BurgerItem key={item.id}>
            <Checkbox color='dark' size='lg' sx={{ marginRight: '0.5rem' }} />
            <BurgetText>{item.title}</BurgetText>
          </BurgerItem>
        ))}
      </AccordionItem>

      <AccordionItem label='INNOVATIONS'>
        {InnovationsBurger.map((item) => (
          <BurgerItem key={item.id}>
            <Checkbox color='dark' size='lg' sx={{ marginRight: '0.5rem' }} />
            <BurgetText>{item.title}</BurgetText>
          </BurgerItem>
        ))}
      </AccordionItem>
    </Accordion>
  )
}

export default MenuAccordion
