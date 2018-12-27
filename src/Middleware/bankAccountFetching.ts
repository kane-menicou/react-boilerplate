'use strict'

import { AnyAction, Dispatch, MiddlewareAPI } from 'redux'
import { FETCH_BANK_ACCOUNTS, setBankAccounts } from '../Actions/BankAccounts'

export default ({ dispatch }: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
  if (action.type === FETCH_BANK_ACCOUNTS) {
    setTimeout(() => {
      dispatch(setBankAccounts([
        {
          id: '1',
          sortCode: '123456',
          accountNumber: '12345678',
          accountRef: 'My special account.'
        },
        {
          id: '2',
          sortCode: '654321',
          accountNumber: '87654321'
        }
      ]))
    }, 500)
  }

  return next(action)
}
