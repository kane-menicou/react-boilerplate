'use strict'

import { Product } from '../Types/Product'
import { AnyAction } from 'redux'
import { SET_PRODUCTS } from '../Actions/Products'

export default function (state: Product[] | null | undefined = null, action: AnyAction) {
  if (action.type === SET_PRODUCTS) {
    return action.products
  }

  return state
}
