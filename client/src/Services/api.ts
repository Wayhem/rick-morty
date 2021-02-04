import axios from 'axios'
import qs from 'querystring'
import { SignupPayload, SigninPayload, FavoritePayload } from 'Models/authModels'

const BASE_URL = 'http://localhost:8080'

export const setHeaderToken = (token: string): void => {
  axios.defaults.headers.common['auth-token'] = token
}

export const SignUp = (payload: SignupPayload) => axios.post(`${BASE_URL}/signup`, payload)
export const SignIn = (payload: SigninPayload) => axios.post(`${BASE_URL}/signin`, payload)
export const Profile = () => axios.get(`${BASE_URL}/profile`)
export const getCharacters = (page: number) => axios.get(`${BASE_URL}/character?${qs.encode({ page })}`)
export const getCharacter = (id: number | string) => axios.get(`${BASE_URL}/character/${id}`)
export const getFavorites = (ids?: string[]) => axios.get(`${BASE_URL}/character?${qs.encode({ ids })}`)
export const setFavorite = (payload: FavoritePayload) => axios.post(`${BASE_URL}/favorites`, payload)
