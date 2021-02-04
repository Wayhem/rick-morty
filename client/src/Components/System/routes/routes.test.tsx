import React from 'react'
import Routes from 'Components/System/routes'
import { render } from 'Utils/test-utils'

test('Routes renders and matches snapshot', () => {
  const { container } = render(<Routes />)
  expect(container).toMatchSnapshot()
})
