import { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[BillSphere] Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <ErrorMessage message={this.state.error?.message || 'Unexpected application error.'} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
