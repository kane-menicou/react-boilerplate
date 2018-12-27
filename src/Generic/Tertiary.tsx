'use strict'

import * as React from 'react'
import styles from './Tertiary.sass'

type children = JSX.Element | JSX.Element[] | string | (JSX.Element | string)[] | (JSX.Element[] | string)[]

interface TertiaryProps {
  children: children
}

export default function ({ children }: TertiaryProps) {
  return (
    <span className={styles.content}>{children}</span>
  )
}
