'use strict'

import * as React from 'react'
import { BankAccount } from '../Types/BankAccount'
import BankAccountComponent from '../Standard/BankAccount'
import Container from '../Generic/Container'
import Row from '../Generic/Row'
import { History } from 'history'

interface BanksProps {
  bankAccounts: BankAccount[],
  history: History
}

function BankAccounts ({ bankAccounts, ...props }: BanksProps) {
  // Unpack props it wants to pass into the loading version.
  const { history } = props

  if (bankAccounts === null) {
    const stubBankAccounts = [
      {
        id: '1',
        sortCode: '123456',
        accountNumber: '12345678',
        accountRef: 'My account'
      },
      {
        id: '2',
        sortCode: '123456',
        accountNumber: '12345678'
      },
      {
        id: '3',
        sortCode: '123456',
        accountNumber: '12345678',
        accountRef: 'My account'
      }
    ]

    // `isLoading` must be false, component will get stuck in a rendering loop if not.
    return (
      <BankAccounts bankAccounts={stubBankAccounts} {...props}/>
    )
  }

  const bankAccountElements = bankAccounts.map(
    (bankAccount: BankAccount) => (
      <BankAccountComponent key={bankAccount.id} {...bankAccount}/>
    )
  )

  function handleAddAnotherBank (event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    history.push('/bank-accounts-new')
  }

  return (
    <Container>
      <Row>
        <a href='#' onClick={handleAddAnotherBank}>Add another</a>
      </Row>
      <>{bankAccountElements}</>
    </Container>
  )
}

export default BankAccounts
