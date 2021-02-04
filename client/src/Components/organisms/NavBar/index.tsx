import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Bar, Username, Spacer } from 'Components/organisms/NavBar/styles'
import OutlinedButton from 'Components/atoms/outlinedButton'
import routes from 'Config/routes'
import authTypes from 'Store/types/authTypes'
import { State } from 'Store/state'

const NavBar = (): JSX.Element => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const location = useLocation()
  const history = useHistory()
  const username = useSelector<State, string>((state: State) => state.auth.username)

  const logout = () => dispatch({ type: authTypes.LOGOUT })

  const goToFavorites = () => history.push(routes.favorites)
  const goHome = () => history.push(routes.home)

  return (
    <Bar>
      <OutlinedButton onClick={logout}>Log out</OutlinedButton>
      <Spacer>
        {location.pathname !== routes.favorites && (
          <OutlinedButton
            color={theme.colors.lighterDarkBlue}
            onClick={goToFavorites}
          >
            Go to favorites
          </OutlinedButton>
        )}
        {location.pathname !== routes.home && (
          <OutlinedButton
            color={theme.colors.lighterDarkBlue}
            onClick={goHome}
          >
            Go to characters list
          </OutlinedButton>
        )}
      </Spacer>
      <Username>Hello, {username}</Username>
    </Bar>
  )
}

export default NavBar
