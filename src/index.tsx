
import * as React from 'react'
import { render } from 'react-dom'
import './index.css'

const Index = () => {
  return <div className='hi'>Hello React!</div>
}

render(<Index />, document.getElementById('index'))
