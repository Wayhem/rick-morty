import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import history from 'Config/history'
import { store } from 'Store'
import Routes from 'Components/System/routes'
import ErrorBoundary from 'Components/atoms/errorBoundary'
import { GlobalStyle, theme } from 'Config/styled'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// TODO: Erase error boundary if Suspense is not implemented
// TODO: style error boundary
// TODO: react-i18next

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback={<div>error</div>}>
          <Router history={history}>
            <Routes />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </>
)

export default App
