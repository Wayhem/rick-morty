import { Component } from 'react'

interface Props {
  fallback: JSX.Element;
  children: JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error):{ hasError: boolean; error: Error; } {
    return {
      hasError: true,
      error,
    }
  }

  render(): JSX.Element {
    const { hasError } = this.state
    const { fallback, children } = this.props
    if (hasError) {
      return fallback
    }

    return children
  }
}

export default ErrorBoundary
