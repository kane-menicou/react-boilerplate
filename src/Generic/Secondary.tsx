'use strict'

import * as React from 'react'
import styles from './Secondary.sass'

type children = JSX.Element | JSX.Element[] | string | (JSX.Element | string)[] | (JSX.Element[] | string)[]

interface SecondaryProps {
  children: children
}

export default function ({ children }: SecondaryProps) {
  return (
    <h4 className={styles.content}>{children}</h4>
  )
}
