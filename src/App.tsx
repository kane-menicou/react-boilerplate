import * as React from 'react'
import { hot } from 'react-hot-loader'
import './index.sass'

const App = () => {
  return (
        <div>
            <img src={require('./logo.png')}/>
            <h1 className='title'>React App</h1>
            <p>React app boiler plate. Ready for use.</p>
        </div>
  )
}

export default hot(module)(App)
