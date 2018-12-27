'use strict'

import * as React from 'react'
import Container from './Container'

interface ProductBoxProps {
  children: string | JSX.Element[] | JSX.Element
}

export default function ({ children }: ProductBoxProps): JSX.Element {
  return (
    <Container>
      {children}
    </Container>
  )
}
