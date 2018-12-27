'use strict'

import { AnyAction } from 'redux'
import { SET_BANK_ACCOUNTS } from '../Actions/BankAccounts'
import { BankAccount } from '../Types/BankAccount'

export default function (state: BankAccount[] | null | undefined = null, action: AnyAction) {
  if (action.type === SET_BANK_ACCOUNTS) {
    return action.bankAccounts
  }

  return state
}
