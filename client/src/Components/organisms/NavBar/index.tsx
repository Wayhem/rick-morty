import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bar, Username } from 'Components/organisms/NavBar/styles'
import OutlinedButton from 'Components/atoms/outlinedButton'
import authTypes from 'Store/types/authTypes'
import { State } from 'Store/state'

const NavBar = () => {
  const dispatch = useDispatch()
  const username = useSelector<State, string>((state: State) => state.auth.username)

  const logout = () => dispatch({ type: authTypes.LOGOUT })

  return (
    <Bar>
      <OutlinedButton onClick={logout}>Log out</OutlinedButton>
      <Username>Hello, {username}</Username>
    </Bar>
  )
}

export default NavBar
