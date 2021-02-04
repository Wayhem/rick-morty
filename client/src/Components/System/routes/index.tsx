import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import routes from 'Config/routes'
import PrivateRoute from 'Components/System/routes/PrivatedRoute'
import LoginRoute from 'Components/System/routes/LoginRoute'
import Login from 'Components/pages/login'
import Home from 'Components/pages/home'
import Favorites from 'Components/pages/favorites'
import Character from 'Components/pages/character'
import NotFound from 'Components/pages/404'
import { State } from 'Store/state'
import { simpleActionCreator } from 'Store/actions'
import authTypes from 'Store/types/authTypes'
import { setHeaderToken } from 'Services/api'

const Routes = () => {
  const dispatch = useDispatch()
  const token = useSelector<State, string>((state: State) => state.auth.token)

  useEffect(() => {
    if (token) {
      setHeaderToken(token)
      dispatch(simpleActionCreator(authTypes.GET_PROFILE))
    }
  }, [token, dispatch])

  return (
    <Switch>
      <LoginRoute path={routes.login} exact>
        <Login />
      </LoginRoute>
      <PrivateRoute path={routes.home} exact>
        <Home />
      </PrivateRoute>
      <PrivateRoute path={routes.favorites} exact>
        <Favorites />
      </PrivateRoute>
      <PrivateRoute path={routes.character}>
        <Character />
      </PrivateRoute>
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
