'use strict'

import * as React from 'react'
import { hot } from 'react-hot-loader'
import Products from './Containers/Products'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import BankAccounts from './Containers/BankAccounts'
import Menu from './Standard/Menu'
import AddBankAccount from './Pages/AddBankAccount'

const App = (props: { store: Store }) => (
  <Provider store={props.store}>
    <Router>
      <>
        <Menu/>
        <Switch>
          <Route exact={true} path='/accounts' component={Products}/>
          <Route exact={true} path='/bank-accounts' component={BankAccounts}/>
          <Route exact={true} path='/bank-accounts-new' component={AddBankAccount}/>
          <Route to='*'>
            <Redirect to='/accounts'/>
          </Route>
        </Switch>
      </>
    </Router>
  </Provider>
)

export default hot(module)(App)
