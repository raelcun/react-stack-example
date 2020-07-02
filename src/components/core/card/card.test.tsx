import { shallow } from 'enzyme'
import React from 'react'

import { Card } from './card'

describe('Card Component', () => {
  it('should render default class', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toHaveClassName('card')
  })

  it('should render additional class object', () => {
    const wrapper = shallow(<Card classes={{ foo: true, bar: false }} />)
    expect(wrapper).toHaveClassName('card')
    expect(wrapper).toHaveClassName('foo')
    expect(wrapper).not.toHaveClassName('bar')
  })

  it('should render additional class string', () => {
    const wrapper = shallow(<Card classes="foo bar" />)
    expect(wrapper).toHaveClassName('card')
    expect(wrapper).toHaveClassName('foo')
    expect(wrapper).toHaveClassName('bar')
  })

  it('should render children', () => {
    const children = <div>foobar</div>
    const wrapper = shallow(<Card>{children}</Card>)
    expect(wrapper.children()).toMatchElement(children)
  })
})
