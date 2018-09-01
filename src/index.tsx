import * as React from 'react'
import { render } from 'react-dom'
import './index.sass'
import { hot } from 'react-hot-loader'

const App = hot(module)(() => <div className='hi'>Hello React!</div>)

render(<App />, document.getElementById('index'))
