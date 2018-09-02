import * as React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

it('render a title', () => {
  const wrapper = shallow(<App/>)

  expect(wrapper.find('h1').exists()).toBe(true)
})
