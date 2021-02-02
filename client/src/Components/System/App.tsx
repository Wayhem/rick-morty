import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'Store'
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
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary fallback={<div>error</div>}>
            <Router>
              <Routes />
            </Router>
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
)

export default App
