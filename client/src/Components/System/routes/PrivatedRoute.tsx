import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { State } from 'Store/state'
import routes from 'Config/routes'

function PrivateRoute({ children, ...rest }: any) {
  const isLoggedIn = useSelector<State, boolean>((state: State) => state.auth.isLoggedIn)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.login,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
