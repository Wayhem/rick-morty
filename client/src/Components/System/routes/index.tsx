import React, { Suspense, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import routes from 'Config/routes'
import PrivateRoute from 'Components/System/routes/PrivatedRoute'
import LoginRoute from 'Components/System/routes/LoginRoute'
import Login from 'Components/pages/login'
import Home from 'Components/pages/home'
import NotFound from 'Components/pages/404'
import HomeSkeleton from 'Components/pages/homeSkeleton'
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
    <Suspense fallback={<HomeSkeleton />}>
      <Switch>
        <LoginRoute path={routes.login} exact>
          <Login />
        </LoginRoute>
        <PrivateRoute path={routes.home} exact>
          <Home />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  )
}

export default Routes
