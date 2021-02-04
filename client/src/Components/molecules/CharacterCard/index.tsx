import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import { Heart } from '@styled-icons/fa-regular'
import { Heart as SolidHeart } from '@styled-icons/fa-solid'
import {
  Box,
  Image,
  ImageSkeleton,
  TextContainer,
  Name,
  Field,
  Label,
  FieldContainer,
  FieldsContainer,
  FavoriteButton
} from 'Components/molecules/CharacterCard/styles'
import { Character as CharacterI } from 'Models/charactersModels'
import authTypes from 'Store/types/authTypes'
import { State } from 'Store/state'

const Character = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  image,
  location
}: CharacterI) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false)
  const dispatch = useDispatch()
  const theme = useTheme()
  const favoritesArray = useSelector<State, number[]>(state => state.auth.favorites)
  const favoritesSet = new Set(favoritesArray)

  const isFavorite = favoritesSet.has(id)

  useEffect(() => {
    setIsLoadingFavorites(false)
  }, [isFavorite])

  const setFavorite = () => {
    dispatch({ type: authTypes.SET_FAVORITE, payload: id })
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
  )
}

export default Character
