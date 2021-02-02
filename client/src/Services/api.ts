import axios from 'axios'
import { SignupPayload } from 'Models/authModels'

const BASE_URL = 'http://localhost:8080'

export const SignUp = (payload: SignupPayload) => axios.post(`${BASE_URL}/signup`, payload)
