import React from 'react'
import CharacterCard from 'Components/molecules/CharacterCard'
import { render } from 'Utils/test-utils'

test('CharacterCard renders and matches snapshot', () => {
  const mockProps = {
    id: 1,
    name: 'Jose',
    status: 'tired',
    species: 'venezuelan',
    type: 'fat',
    gender: 'male',
    origin: { name: 'somewhere over the rainbow', url: '' },
    image: 'ew',
    location: { name: 'somewhere over the rainbow', url: '' },
    refProp: null
  }

  const { container } = render(<CharacterCard {...mockProps} />)
  expect(container).toMatchSnapshot()
})
