'use strict'

import * as React from 'react'
import styles from './Row.sass'

type children = JSX.Element | JSX.Element[] | string | (JSX.Element | string)[] | (JSX.Element[] | string)[]

interface RowProps {
  children: children,
  className?: string
}

export default ({ children, className = '' }: RowProps) => (
  <div className={`${styles.row} ${className}`.trim()}>
    {children}
  </div>
)
