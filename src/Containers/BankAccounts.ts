'use strict'

import { connect } from 'react-redux'
import BankAccounts from '../Pages/BankAccounts'
import State from '../Types/State.d'
import { Dispatch } from 'redux'
import withLoading from '../Hocs/withLoading'
import { fetchBankAccounts } from '../Actions/BankAccounts'

function mapStateToProps ({ bankAccounts }: State) {
  return {
    bankAccounts,
    isLoading: bankAccounts === null
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    /**
     * Used in the `withLoading` HOC.
     */
    load () {
      dispatch(fetchBankAccounts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withLoading(BankAccounts)
)
