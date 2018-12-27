'use strict'

import { combineReducers } from 'redux'
import products from './products'
import State from '../Types/State'
import bankAccounts from './bankAccounts'

export default combineReducers<State>({
  products,
  bankAccounts
})
