import * as React from 'react'
import { hot } from 'react-hot-loader'
import style from './App.sass'
import logo from './logo.png'

const App = () => {
  const [name, setName] = React.useState('')

  function onChange ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) {
    setName(currentTarget.value)
  }

  return (
    <div>
        <img alt='React logo' className={style.image} src={logo}/>
        <h1 className={`${style.header} header`}>React App</h1>
        <p className={style.body}>Hi {name.trim() === '' ? '' : `${name}!`}</p>
        <input type='text' placeholder='Name' value={name} onChange={onChange}/>
    </div>
  )
}

export default hot(module)(App)
