import axios from 'axios'
import { SignupPayload, SigninPayload } from 'Models/authModels'

const BASE_URL = 'http://localhost:8080'

export const setHeaderToken = (token: string): void => {
  axios.defaults.headers.common['auth-token'] = token
}

export const SignUp = (payload: SignupPayload) => axios.post(`${BASE_URL}/signup`, payload)
export const SignIn = (payload: SigninPayload) => axios.post(`${BASE_URL}/signin`, payload)
export const Profile = () => axios.get(`${BASE_URL}/profile`)
