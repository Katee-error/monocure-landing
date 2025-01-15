'use client'
import React from 'react';

import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';

import { theme } from './theme';

interface ThemeProviderProps extends Omit<ChakraProviderProps, 'theme'> {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ChakraProvider theme={theme} {...props}>
      {children}
    </ChakraProvider>
  );
}
