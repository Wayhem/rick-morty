import React, { useEffect, useState, SyntheticEvent } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import Loader from 'react-loader-spinner'
import { get } from 'lodash'
import { Heart } from '@styled-icons/fa-regular'
import { Heart as SolidHeart } from '@styled-icons/fa-solid'
import Navbar from 'Components/organisms/NavBar'
import {
  Field,
  FieldContainer,
  Label,
  Box,
  Image,
  ImageSkeleton,
  TextContainer,
  Name,
  FieldsContainer,
  FavoriteButton
} from 'Components/pages/character/styles'
import charactersTypes from 'Store/types/charactersTypes'
import { State } from 'Store/state'
import authTypes from 'Store/types/authTypes'
import { Character } from 'Models/charactersModels'

const CharacterPage = (): JSX.Element => {
  const params = useParams<{ id: string; }>()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: charactersTypes.GET_CHARACTER, payload: params.id })
  }, [params.id, dispatch])

  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false)
  const theme = useTheme()
  const favoritesArray = useSelector<State, number[]>(state => state.auth.favorites)
  const {
    location,
    origin,
    image,
    name,
    status,
    type,
    species,
    gender
  } = useSelector<State, Partial<Character>>(state => state.characters.currentCharacter)
  const favoritesSet = new Set(favoritesArray)

  const isFavorite = favoritesSet.has(parseInt(params.id, 10))

  useEffect(() => {
    setIsLoadingFavorites(false)
  }, [isFavorite])

  const setFavorite = (e: SyntheticEvent) => {
    e.stopPropagation()
    dispatch({ type: authTypes.SET_FAVORITE, payload: params.id })
    setIsLoadingFavorites(true)
  }
  const handleLoading = () => setIsLoaded(true)

  const renderField = (label?: string, value?: string) => (
    <FieldContainer>
      <Label>{label}</Label>
      <Field>{value}</Field>
    </FieldContainer>
  )

  const locationName = get(location, 'name', '')
  const originName = get(origin, 'name', '')

  const renderHeart = () => isFavorite
    ? <SolidHeart size={19} color={theme.colors.orange} /> : <Heart size={19} />

  return (
    <>
      <Navbar />
      <Box>
        {!isLoaded && <ImageSkeleton />}
        <Image src={image} onLoad={handleLoading} display={isLoaded ? 'block' : 'none'} />
        <TextContainer>
          <Name>{name}</Name>
          <FieldsContainer>
            {renderField('status', status)}
            {renderField('species', species)}
            {renderField('type', type)}
            {renderField('gender', gender)}
            {renderField('status', status)}
            {renderField('last seen', locationName)}
            {renderField('origin', originName)}
          </FieldsContainer>
        </TextContainer>
        <FavoriteButton onClick={setFavorite}>
          {isLoadingFavorites ? (
            <Loader
              type='Hearts'
              color={theme.colors.orange}
              height={19}
              width={19}
            />
          ) : renderHeart()}
        </FavoriteButton>
      </Box>
    </>
  )
}

export default CharacterPage
