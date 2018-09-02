import * as React from 'react'
import { hot } from 'react-hot-loader'

const App = () => {
  return (
        <div className='hi'>
            <img src={require('./logo.png')}/>
            <h1>React App</h1>
            <p>React app boiler plate. Ready for use. Hi there</p>
        </div>
  )
}

export default hot(module)(App)
