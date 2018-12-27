'use strict'

import { connect } from 'react-redux'
import Products from '../Pages/Products'
import State from '../Types/State.d'
import { Dispatch } from 'redux'
import { fetchProducts } from '../Actions/Products'
import withLoading from '../Hocs/withLoading'

function mapStateToProps ({ products }: State) {
  const isLoading = products === null

  return {
    products: isLoading ? [] : products,

    /**
     * Used in the `withLoading` HOC.
     */
    isLoading
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    /**
     * Used in the `withLoading` HOC.
     */
    load () {
      dispatch(fetchProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withLoading(Products)
)
