import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(err) {
    return { error: err };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '40px', fontFamily: 'monospace', background: '#0b0f19', color: '#f87171', minHeight: '100vh' }}>
          <h1 style={{ color: '#f87171', marginBottom: '16px' }}>💥 Runtime Error</h1>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '13px', color: '#fca5a5', background: '#1e0a0a', padding: '16px', borderRadius: '8px' }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
