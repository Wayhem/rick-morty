import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import TextInput from 'Components/atoms/TextInput'
import { Box, InputContainer, SubmitButton, Row, ClearButton } from 'Components/organisms/LoginBox/styles'

import { positionShift } from 'Config/constants/inputLabelShift'

import { createUserAction } from 'Store/actions/authActions'

const LoginBox = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const clearFields = () => {
    setUsername('')
    setEmail('')
    setPassword('')
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(createUserAction(username, password, email))
  }

  return (
    <Box>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <InputContainer>
          <TextInput
            label='Email'
            placeholder='Email'
            inputId='emailInput'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            labelShift={positionShift.up}
            required
          />
        </InputContainer>
        <InputContainer>
          <TextInput
            label='Username'
            placeholder='Username'
            inputId='usernameInput'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <TextInput
            label='Password'
            placeholder='Password'
            inputId='passwordInput'
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
            labelShift={positionShift.down}
            required
          />
        </InputContainer>
        <Row>
          <ClearButton type='button' onClick={clearFields}>Clear</ClearButton>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </Row>
      </form>
    </Box>
  )
}

export default LoginBox
