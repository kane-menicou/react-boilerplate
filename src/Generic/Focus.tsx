'use strict'

import * as React from 'react'
import styles from './Focus.sass'

interface BoxProps {
  children: string
}

export default function ({ children }: BoxProps): JSX.Element {
  return (
    <span className={styles.content}>
      {children}
    </span>
  )
}
