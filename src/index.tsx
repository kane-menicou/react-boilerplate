import * as React from 'react'
import { render } from 'react-dom'
import './index.sass'
import { hot } from 'react-hot-loader'

const App = () => {
  return (
        <div className='hi'>
            <img src={require('./logo.png')}/>
            <h1>React App</h1>
            <p>React app boiler plate. Ready for use.</p>
        </div>
  )
}

hot(module)(App)

render(<App/>, document.getElementById('index'))
