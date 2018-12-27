'use strict'

import * as React from 'react'

type children = JSX.Element | JSX.Element[] | string | (JSX.Element | string)[] | (JSX.Element[] | string)[]

interface TitleProps {
  children: children
}

export default function ({ children }: TitleProps) {
  return (
    <h3>{children}</h3>
  )
}
