import React from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components/macro'
import { Router } from 'react-router-dom'
import history from 'Config/history'
import Routes from 'Components/System/routes'
import { ErrorBoundary } from 'Components/atoms'
import { GlobalStyle, theme } from 'Config/styled'

// TODO: style error boundary
// TODO: react-i18next

const App = () => (
  <>
    <GlobalStyle />
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback={<div>error</div>}>
          <Router history={history}>
            <Routes />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </RecoilRoot>
  </>
)

export default App
