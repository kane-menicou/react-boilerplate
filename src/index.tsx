import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.sass'
import { AnyAction, applyMiddleware, createStore } from 'redux'
import reducers from './Reducers/index'
import middleware from './Middleware/index'
import State from './Types/State.d'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
history.push(window.location.pathname)

const store = createStore<State, AnyAction, {}, {}>(
  reducers,
  applyMiddleware(...middleware)
)

render(<App store={store}/>, document.getElementById('index'))
