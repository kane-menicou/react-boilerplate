'use strict'

import * as React from 'react'
import styles from './Container.sass'

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | string
}

export default ({ children }: ContainerProps) => (
  <div className={styles.container}>
    {children}
  </div>
)
