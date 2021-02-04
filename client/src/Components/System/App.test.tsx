import React from 'react'
import App from 'Components/System/App'
import { render } from 'Utils/test-utils'

test('App renders and matches snapshot', () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})
