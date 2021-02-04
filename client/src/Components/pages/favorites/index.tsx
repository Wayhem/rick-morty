import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import { useTheme } from 'styled-components'
import Loader from 'react-loader-spinner'
import charactersTypes from 'Store/types/charactersTypes'
import { Container } from 'Components/pages/home/styles'
import Navbar from 'Components/organisms/NavBar'
import Card from 'Components/molecules/CharacterCard'
import { Character } from 'Models/charactersModels'
import { State } from 'Store/state'

const Home = () => {
  const dispatch = useDispatch()
  const characterList = useSelector<State, Character[]>((state: State) => state.characters.characterList)
  const favorites = useSelector<State, number[]>((state: State) => state.auth.favorites)
  const charactersLoading = useSelector<State, boolean>((state: State) => state.characters.charactersLoading)
  const theme = useTheme()

  const payload = isEmpty(favorites) ? '' : favorites

  useEffect(() => {
    dispatch({ type: charactersTypes.GET_FAVORITES, payload })
  }, [dispatch, payload])

  return (
    <>
      <Navbar />
      <Container loading={charactersLoading}>
        {charactersLoading ? (
          <Loader
            type='Circles'
            color={theme.colors.white}
            height={200}
            width={200}
          />
        ) : characterList.map(({
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
