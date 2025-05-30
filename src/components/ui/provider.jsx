'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from "next-themes"


import { ColorModeProvider } from './color-mode'
import { system } from '../../theme'

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
      <ColorModeProvider {...props} />
      </ThemeProvider>
    </ChakraProvider>
  )
}
