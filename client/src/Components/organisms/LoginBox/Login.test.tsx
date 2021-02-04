import React from 'react'
import LoginBox from 'Components/organisms/LoginBox'
import { render } from 'Utils/test-utils'

test('LoginBox renders and matches snapshot', () => {
  const { container } = render(<LoginBox />)
  expect(container).toMatchSnapshot()
})
