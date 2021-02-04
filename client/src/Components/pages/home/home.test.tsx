import React from 'react'
import Home from 'Components/pages/home'
import { render } from 'Utils/test-utils'

test('Home renders and matches snapshot', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
