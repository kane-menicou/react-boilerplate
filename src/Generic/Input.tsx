'use strict'

import * as React from 'react'
import styles from './Input.sass'

export default (
  {
    className = '',
    ...props
  }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
  <input
    className={`${styles.input} ${className}`.trim()}
    {...props}
  >
    {props.children}
  </input>
)
