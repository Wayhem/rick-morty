import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import routes from 'Config/routes'
import PrivateRoute from 'Components/System/routes/PrivatedRoute'
import LoginRoute from 'Components/System/routes/LoginRoute'
import Login from 'Components/pages/login'
import Home from 'Components/pages/home'
import HomeSkeleton from 'Components/pages/homeSkeleton'

const Routes = () => (
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

export default Routes
