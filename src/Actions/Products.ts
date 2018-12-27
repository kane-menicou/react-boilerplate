'use strict'

import { AnyAction } from 'redux'
import { Product } from '../Types/Product'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'

export interface FetchProductsAction extends AnyAction {}

export interface SetProductsAction extends AnyAction {
  products: Product[]
}

export function fetchProducts (): FetchProductsAction {
  return {
    type: FETCH_PRODUCTS
  }
}

export function setProducts (products: Product[]): SetProductsAction {
  return {
    type: SET_PRODUCTS,
    products
  }
}
