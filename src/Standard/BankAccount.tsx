'use strict'

import * as React from 'react'
import Row from '../Generic/Row'
import Secondary from '../Generic/Secondary'
import Focus from '../Generic/Focus'
import Box from '../Generic/Box'
import styles from './BankAccount.sass'

interface BankAccountProps {
  sortCode: string
  accountNumber: string,
  accountRef?: string | null
}

function BankAccount ({ sortCode, accountNumber, accountRef = null }: BankAccountProps) {
  const accountReference = accountRef === null ? '' : (
    <Row>
      <Secondary>
        <Focus>{accountRef}</Focus> Ref
      </Secondary>
    </Row>
  )

  return (
    <Row className={styles.container}>
      <Box>
        <Row>
          <Secondary>
            <Focus>{sortCode}</Focus> Sort code
          </Secondary>
        </Row>
        <Row>
          <Secondary>
            <Focus>{accountNumber}</Focus> Account number
          </Secondary>
        </Row>
        <>{accountReference}</>
      </Box>
    </Row>
  )
}

export default BankAccount
