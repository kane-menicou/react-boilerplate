'use strict'

import { connect } from 'react-redux'
import BankAccounts from '../Pages/BankAccounts'
import State from '../Types/State.d'
import { Dispatch } from 'redux'
import withLoading from '../Hocs/withLoading'
import { fetchBankAccounts } from '../Actions/BankAccounts'
import AddBankAccount from '../Pages/AddBankAccount'

function mapStateToProps ({ bankAccounts }: State) {
  return {
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    onFieldChange
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBankAccount)
