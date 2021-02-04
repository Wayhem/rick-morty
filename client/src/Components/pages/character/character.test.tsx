import React from 'react'
import Character from 'Components/pages/character'
import { render } from 'Utils/test-utils'

test('Character renders and matches snapshot', () => {
  const { container } = render(<Character />)
  expect(container).toMatchSnapshot()
})
