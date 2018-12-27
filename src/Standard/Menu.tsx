'use strict'

import * as React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.sass'
import Container from '../Generic/Container'

export default function () {
  return (
    <Container>
      <Link className={styles.menuItem} to='/accounts'>Accounts</Link>
      <Link className={styles.menuItem} to='/bank-accounts'>Bank accounts</Link>
    </Container>
  )
}
