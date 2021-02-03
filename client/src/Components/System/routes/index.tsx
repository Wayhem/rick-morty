import React, { Suspense, useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import routes from 'Config/routes'
import PrivateRoute from 'Components/System/routes/PrivatedRoute'
import LoginRoute from 'Components/System/routes/LoginRoute'
import Login from 'Components/pages/login'
import Home from 'Components/pages/home'
import HomeSkeleton from 'Components/pages/homeSkeleton'
import { State } from 'Store/state'
import { simpleActionCreator } from 'Store/actions'
import authTypes from 'Store/types/authTypes'
import { setHeaderToken } from 'Services/api'

const Routes = () => {
  const dispatch = useDispatch()
  const token = useSelector<State, string>((state: State) => state.auth.token)

  useEffect(() => {
    setHeaderToken(token)
    dispatch(simpleActionCreator(authTypes.GET_PROFILE))
  }, [token, dispatch])

  return (
    <>
      <Switch>
        <Suspense fallback={<HomeSkeleton />}>
          <LoginRoute path={routes.login} exact>
            <Login />
          </LoginRoute>
          <PrivateRoute path={routes.home} exact>
            <Home />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </>
  )
}

export default Routes
