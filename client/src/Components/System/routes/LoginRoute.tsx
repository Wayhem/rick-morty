import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { State } from 'Store/state'
import routes from 'Config/routes'

function LoginRoute({ children, ...rest }: any) {
  const isLoggedIn = useSelector<State, boolean>((state: State) => state.auth.isLoggedIn)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Redirect
            to={{
              pathname: routes.home,
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  )
}

export default LoginRoute
