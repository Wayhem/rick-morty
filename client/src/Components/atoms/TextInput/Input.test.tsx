import React from 'react'
import TextInput from 'Components/atoms/TextInput'
import { render } from 'Utils/test-utils'

test('TextInput renders and matches snapshot', () => {
  const mockProps = {
    placeholder: '',
    label: '',
    inputId: '',
    value: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => {}
  }

  const { container } = render(<TextInput {...mockProps} />)
  expect(container).toMatchSnapshot()
})
