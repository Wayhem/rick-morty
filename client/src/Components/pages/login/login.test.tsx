import React from 'react'
import Login from 'Components/pages/login'
import { render } from 'Utils/test-utils'

test('Login renders and matches snapshot', () => {
  const { container } = render(<Login />)
  expect(container).toMatchSnapshot()
})
