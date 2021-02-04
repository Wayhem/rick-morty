import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import charactersTypes from 'Store/types/charactersTypes'
import { Container } from 'Components/pages/home/styles'
import Navbar from 'Components/organisms/NavBar'
import Card from 'Components/molecules/CharacterCard'
import { Character } from 'Models/charactersModels'
import { State } from 'Store/state'

const Home = () => {
  const dispatch = useDispatch()
  const characterList = useSelector<State, Character[]>((state: State) => state.characters.characterList)

  useEffect(() => {
    dispatch({ type: charactersTypes.GET_CHARACTERS })
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Container>
        {characterList.map(({
          id,
          name,
          status,
          species,
          type,
          gender,
          origin,
          location,
          image
        }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
            origin={origin}
            location={location}
            image={image}
          />
        ))}
      </Container>
    </>
  )
}

export default Home
