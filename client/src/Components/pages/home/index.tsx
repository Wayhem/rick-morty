import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useTheme } from 'styled-components'
// import Loader from 'react-loader-spinner'
import charactersTypes from 'Store/types/charactersTypes'
import { Container } from 'Components/pages/home/styles'
import Navbar from 'Components/organisms/NavBar'
import Card from 'Components/molecules/CharacterCard'
import { Character } from 'Models/charactersModels'
import { State } from 'Store/state'

const Home = () => {
  const [charactersToShow, setCharactersToShow] = useState<Character[]>([])
  const [pageNum, setPageNum] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observer: React.MutableRefObject<IntersectionObserver | undefined> = useRef()
  const lastCharacterElementRef = useCallback(
    node => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore]
  )
  const dispatch = useDispatch()
  const characterList = useSelector<State, Character[]>((state: State) => state.characters.characterList)
  const charactersLoading = useSelector<State, boolean>((state: State) => state.characters.charactersLoading)
  // const theme = useTheme()

  useEffect(() => {
    dispatch({ type: charactersTypes.GET_CHARACTERS, payload: pageNum })
    setIsLoading(true)
  }, [dispatch, pageNum])

  useEffect(() => {
    setCharactersToShow((value) => {
      const filteredCharacters = characterList.filter(({ id: newId }) => {
        const Ids = value.map(({ id }) => id)
        return !Ids.some(el => el === newId)
      })

      return [...value, ...filteredCharacters]
    })
    setHasMore(characterList.length > 0)
    setIsLoading(false)
  }, [characterList])

  return (
    <>
      <Navbar />
      <Container isLoading={charactersLoading}>
        {charactersToShow.map(({
          id,
          name,
          status,
          species,
          type,
          gender,
          origin,
          location,
          image
        }, index) => (
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
            refProp={charactersToShow.length === index + 1 ? lastCharacterElementRef : null}
          />
        ))}
      </Container>
    </>
  )
}

export default Home
