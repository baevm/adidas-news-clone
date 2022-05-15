import '../styles/globals.css'
import React from 'react'
import { MantineProvider } from '@mantine/core'
import { AppWrapper } from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </MantineProvider>
  )
}

export default MyApp
