/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios'
import qs from 'querystring'
import { SignupPayload, SigninPayload, FavoritePayload } from 'Models/authModels'

const BASE_URL = 'http://localhost:8080'

export const setHeaderToken = (token: string): void => {
  axios.defaults.headers.common['auth-token'] = token
}

export const SignUp = (payload: SignupPayload): Promise<AxiosResponse<any>> => axios.post(`${BASE_URL}/signup`, payload)
export const SignIn = (payload: SigninPayload): Promise<AxiosResponse<any>> => axios.post(`${BASE_URL}/signin`, payload)
export const Profile = (): Promise<AxiosResponse<any>> => axios.get(`${BASE_URL}/profile`)
export const getCharacters = (page: number): Promise<AxiosResponse<any>> => axios.get(`${BASE_URL}/character?${qs.encode({ page })}`)
export const getCharacter = (id: number | string): Promise<AxiosResponse<any>> => axios.get(`${BASE_URL}/character/${id}`)
export const getFavorites = (ids?: string[]): Promise<AxiosResponse<any>> => axios.get(`${BASE_URL}/character?${qs.encode({ ids })}`)
export const setFavorite = (payload: FavoritePayload): Promise<AxiosResponse<any>> => axios.post(`${BASE_URL}/favorites`, payload)
