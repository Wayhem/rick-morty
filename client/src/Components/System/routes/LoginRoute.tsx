/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { State } from 'Store/state'
import routes from 'Config/routes'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function LoginRoute({ children, ...rest }: any): JSX.Element {
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
