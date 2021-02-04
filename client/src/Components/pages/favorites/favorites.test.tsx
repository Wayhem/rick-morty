import React from 'react'
import Favorites from 'Components/pages/favorites'
import { render } from 'Utils/test-utils'

test('Favorites renders and matches snapshot', () => {
  const { container } = render(<Favorites />)
  expect(container).toMatchSnapshot()
})
