import * as React from 'react'
import { hot } from 'react-hot-loader'
import style from './App.sass'
import logo from './logo.png'

const App = () => {
  return (
        <div>
            <img className={style.image} src={logo}/>
            <h1 className={`${style.header} header`}>React App</h1>
            <p className={style.body}>React app boiler plate. Ready for use.</p>
        </div>
  )
}

export default hot(module)(App)
