'use strict'

import * as React from 'react'
import Row from '../Generic/Row'
import Title from '../Generic/Title'
import Secondary from '../Generic/Secondary'
import Focus from '../Generic/Focus'
import Tertiary from '../Generic/Tertiary'
import Box from '../Generic/Box'
import styles from './Saving.sass'

interface SavingProps {
  title: string,
  availableBalance?: number | null,
  currentBalance: number
}

function Saving ({ title, availableBalance = null, currentBalance }: SavingProps) {
  const formattedAvailable = availableBalance === null ? '0' : `£${availableBalance.toFixed(2)}`
  const formattedCurrent = `£${currentBalance.toFixed(2)}`

  return (
    <Row className={styles.container}>
      <Box>
        <Row>
          <Title>{title}</Title>
        </Row>
        <Row>
          <Secondary>
            <Focus>{formattedAvailable}</Focus> Available balance
          </Secondary>
        </Row>
        <Row>
          <Tertiary>
            <Focus>{formattedCurrent}</Focus> Current balance
          </Tertiary>
        </Row>
      </Box>
    </Row>
  )
}

export default Saving
