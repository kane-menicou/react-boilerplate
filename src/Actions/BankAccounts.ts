'use strict'

import { AnyAction } from 'redux'
import { BankAccount } from '../Types/BankAccount'

export const FETCH_BANK_ACCOUNTS = 'FETCH_BANK_ACCOUNTS'
export const SET_BANK_ACCOUNTS = 'SET_BANK_ACCOUNTS'
export const CREATE_BANK_ACCOUNT = 'CREATE_BANK_ACCOUNT'

export interface FetchBankAccountsAction extends AnyAction {}

export interface SetBankAccountsAction extends AnyAction {
  bankAccounts: BankAccount[]
}

export interface CreateBankAccountAction extends AnyAction {
  sortCode: string,
  accountNumber: string,
  accountRef?: string
}

export function fetchBankAccounts (): FetchBankAccountsAction {
  return {
    type: FETCH_BANK_ACCOUNTS
  }
}

export function setBankAccounts (bankAccounts: BankAccount[]): SetBankAccountsAction {
  return {
    type: SET_BANK_ACCOUNTS,
    bankAccounts
  }
}

export function createBankAccount (
  sortCode: string,
  accountNumber: string,
  accountRef?: string
): CreateBankAccountAction {
  return {
    type: CREATE_BANK_ACCOUNT,
    sortCode,
    accountNumber,
    accountRef
  }
}
