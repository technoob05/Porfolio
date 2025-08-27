import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HiOutlineRefresh, HiOutlineHome } from 'react-icons/hi';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container fluid className="error-boundary-section">
          <Container>
            <Row style={{ justifyContent: "center", minHeight: "80vh", alignItems: "center" }}>
              <Col md={8} style={{ textAlign: "center" }}>
                <div className="error-boundary-content">
                  <h1 className="error-code">⚠️</h1>
                  <h2 className="error-title">
                    Something went <span style={{ color: "#00d9ff" }}>wrong</span>
                  </h2>
                  <p className="error-description">
                    Our AI seems to have encountered an unexpected error. 
                    Don't worry, even the most advanced algorithms have their off days! 🤖
                  </p>
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <details className="error-details">
                      <summary>Error Details (Development Mode)</summary>
                      <pre>{this.state.error.toString()}</pre>
                      {this.state.errorInfo.componentStack && (
                        <pre>{this.state.errorInfo.componentStack}</pre>
                      )}
                    </details>
                  )}
                  <div className="error-actions">
                    <Button 
                      onClick={this.handleReload}
                      className="error-btn primary-btn"
                      style={{ marginRight: "15px" }}
                    >
                      <HiOutlineRefresh style={{ marginRight: "8px" }} />
                      Try Again
                    </Button>
                    <Button 
                      onClick={this.handleGoHome}
                      variant="outline-primary"
                      className="error-btn secondary-btn"
                    >
                      <HiOutlineHome style={{ marginRight: "8px" }} />
                      Go Home
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          
          <style jsx>{`
            .error-boundary-section {
              position: relative;
              padding-top: 150px;
              padding-bottom: 100px;
              background: var(--primary-bg);
              min-height: 100vh;
            }
            
            .error-boundary-content {
              padding: 40px;
              background: rgba(255, 255, 255, 0.02);
              backdrop-filter: blur(20px);
              border: 1px solid var(--glass-border);
              border-radius: 24px;
              box-shadow: 
                0 12px 40px rgba(0, 0, 0, 0.15),
                0 0 20px rgba(255, 99, 71, 0.1);
            }
            
            .error-code {
              font-size: 5em;
              margin-bottom: 20px;
            }
            
            .error-title {
              font-size: 2.5em;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 20px;
            }
            
            .error-description {
              font-size: 1.2em;
              color: var(--text-secondary);
              line-height: 1.6;
              margin-bottom: 30px;
            }
            
            .error-details {
              background: rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(255, 99, 71, 0.3);
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
              text-align: left;
            }
            
            .error-details summary {
              color: #ff6347;
              cursor: pointer;
              font-weight: 600;
              margin-bottom: 10px;
            }
            
            .error-details pre {
              color: #ff9999;
              font-size: 0.9em;
              white-space: pre-wrap;
              word-break: break-word;
            }
            
            .error-actions {
              display: flex;
              justify-content: center;
              gap: 15px;
              flex-wrap: wrap;
            }
            
            .error-btn {
              padding: 12px 30px;
              font-weight: 600;
              border-radius: 12px;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              font-size: 1.1em;
            }
            
            .primary-btn {
              background: linear-gradient(135deg, var(--accent-blue), #33e6ff);
              border: none;
              color: #000;
            }
            
            .primary-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(0, 217, 255, 0.4);
            }
            
            .secondary-btn {
              border: 2px solid var(--accent-blue);
              color: var(--accent-blue);
              background: transparent;
            }
            
            .secondary-btn:hover {
              background: var(--accent-blue);
              color: #000;
              transform: translateY(-2px);
            }
          `}</style>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
