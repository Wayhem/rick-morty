import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import Loader from 'react-loader-spinner'

import TextInput from 'Components/atoms/TextInput'
import {
  Box,
  InputContainer,
  SubmitButton,
  Row,
  ClearButton,
  Form,
  FormTypeButton,
  FieldsContainer
} from 'Components/organisms/LoginBox/styles'

import { formTypes, fields } from 'Config/constants/formConstants'
import { positionShift } from 'Config/constants/inputLabelShift'

import { createUserAction, loginUserAction } from 'Store/actions/authActions'
import { State } from 'Store/state'

interface LoginField {
  label: string;
  placeholder: string;
  id: string;
  value: string;
  type: string;
  setValue: Function;
  shift?: positionShift;
  required?: boolean;
}

const LoginBox = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formSelected, setFormSelected] = useState(formTypes.register)

  const isPending = useSelector<State, boolean>((state: State) => state.auth.loginPagePending)

  const dispatch = useDispatch()
  const theme = useTheme()

  const clearFields = () => {
    setUsername('')
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (formSelected === formTypes.register) dispatch(createUserAction({ username, password, email }))
    if (formSelected === formTypes.login) dispatch(loginUserAction({ email, password }))
  }

  const changeFormType = (type: formTypes) => setFormSelected(type)

  const emailField = { value: email, setValue: setEmail, ...fields.email }
  const usernameField = { value: username, setValue: setUsername, ...fields.username }
  const passwordField = { value: password, setValue: setPassword, ...fields.password }

  const fieldsToRendered = formSelected === formTypes.register
    ? [emailField, usernameField, passwordField] : [emailField, passwordField]

  const renderFormButton = (type: formTypes, label: string, borderRight: string = 'none') => {
    const isSelected = type === formSelected

    return (
      <FormTypeButton
        borderRight={borderRight}
        borderTop={isSelected ? 'none' : `1px solid ${theme.colors.gray}`}
        onClick={() => changeFormType(type)}
        isSelected={isSelected}
      >
        {label}
      </FormTypeButton>
    )
  }

  const renderField = ({
    label,
    placeholder,
    id,
    value,
    type,
    setValue,
    required,
    shift
  }: LoginField) => (
    <InputContainer key={id}>
      <TextInput
        label={label}
        placeholder={placeholder}
        inputId={id}
        value={value}
        type={type}
        onChange={e => setValue(e.target.value)}
        required={required}
        labelShift={shift}
        disabled={isPending}
      />
    </InputContainer>
  )

  return (
    <>
      <Box>
        <Form onSubmit={handleSubmit} autoComplete='off'>
          <FieldsContainer>
            {fieldsToRendered.map(field => renderField(field))}
          </FieldsContainer>
          <Row>
            <ClearButton type='button' onClick={clearFields}>Clear</ClearButton>
            <SubmitButton type='submit'>
              {isPending
                ? (
                  <Loader
                    type='Circles'
                    color={theme.colors.white}
                    height={19}
                    width={19}
                  />
                ) : 'Submit'}
            </SubmitButton>
          </Row>
        </Form>
        <Row
          backgroundColor={theme.colors.white}
          marginTop='0px'
        >
          {renderFormButton(formTypes.register, 'Register', `1px solid ${theme.colors.gray}`)}
          {renderFormButton(formTypes.login, 'Login')}
        </Row>
      </Box>
    </>
  )
}

export default LoginBox
