import React from 'react'
import NavBar from 'Components/organisms/NavBar'
import { render } from 'Utils/test-utils'

test('NavBar renders and matches snapshot', () => {
  const { container } = render(<NavBar />)
  expect(container).toMatchSnapshot()
})
