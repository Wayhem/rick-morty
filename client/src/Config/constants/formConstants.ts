import { positionShift } from 'Config/constants/inputLabelShift'

// eslint-disable-next-line no-shadow
export enum formTypes {
  register = 'REGISTER',
  login = 'LOGIN'
}

export const fields = {
  username: {
    label: 'Username',
    placeholder: 'username',
    type: 'text',
    id: 'usernameInput',
    required: true
  },
  email: {
    label: 'Email',
    placeholder: 'email',
    type: 'email',
    id: 'emailInput',
    required: true,
    shift: positionShift.up
  },
  password: {
    label: 'Password',
    placeholder: 'password',
    type: 'password',
    id: 'passwordInput',
    required: true
  },
}
