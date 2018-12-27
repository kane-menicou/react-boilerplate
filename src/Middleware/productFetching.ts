'use strict'

import { AnyAction, Dispatch, MiddlewareAPI } from 'redux'
import { FETCH_PRODUCTS, setProducts } from '../Actions/Products'

export default ({ dispatch }: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
  if (action.type === FETCH_PRODUCTS) {
    setTimeout(() => {
      dispatch(setProducts([
        {
          id: '1',
          title: 'Some product',
          currentBalance: 22.22,
          type: 1,
          availableBalance: 22.22
        },
        {
          id: '2',
          title: 'Some product 2',
          currentBalance: 44.53,
          type: 1,
          availableBalance: 30.00
        }
      ]))
    }, 500)
  }

  return next(action)
}
