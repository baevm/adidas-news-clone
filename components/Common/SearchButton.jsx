import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { useOutsideClick } from '../../hooks/useOutsideClick'

const SearchInput = styled.input`
  font-size: 0.875rem;
  padding: 15px 0px 15px 50px;
  height: 100%;
  width: 100%;
  border: 1px solid black;

  @media (min-width: 768px) {
    height: 50%;
    width: auto;
  }
`
const SearchButton = () => {
  const [active, setActive] = useState(false)

  const closeSearchInput = () => {
    setActive(false)
  }
  const ref = useOutsideClick(closeSearchInput)
  return (
    <AnimatePresence exitBeforeEnter>
      {active ? (
        <motion.div
          key='key'
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
          exit={{ width: 0, opacity: 0 }}>
          <div
            ref={ref}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
            <SearchInput placeholder='SEARCH' />
            <FiSearch size='1.2em' style={{ position: 'absolute', float: 'right', marginLeft: '1rem', left: '1px' }} />
            <FiX
              size='1.2em'
              onClick={() => setActive(!active)}
              style={{ cursor: 'pointer', float: 'right', position: 'absolute', right: '1px', marginRight: '0.5rem' }}
            />
          </div>
        </motion.div>
      ) : (
        <FiSearch size='1.4em' onClick={() => setActive(!active)} style={{ cursor: 'pointer' }} />
      )}
    </AnimatePresence>
  )
}

export default SearchButton
