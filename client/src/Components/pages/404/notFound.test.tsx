import React from 'react'
import NotFound from 'Components/pages/404'
import { render } from 'Utils/test-utils'

test('NotFound renders and matches snapshot', () => {
  const { container } = render(<NotFound />)
  expect(container).toMatchSnapshot()
})
