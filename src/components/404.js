import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlineRefresh } from "react-icons/hi";
import Particle from "./Particle";

function NotFound() {
  return (
    <Container fluid className="error-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", minHeight: "70vh", alignItems: "center" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <div className="error-content">
              <h1 className="error-code">404</h1>
              <h2 className="error-title">
                Oops! <span style={{ color: "#00d9ff" }}>Page Not Found</span>
              </h2>
              <p className="error-description">
                The page you're looking for seems to have wandered off into the digital void. 
                Don't worry, even the best AI algorithms sometimes take wrong turns! 🤖
              </p>
              <div className="error-actions">
                <Button 
                  as={Link} 
                  to="/" 
                  className="error-btn primary-btn"
                  style={{ marginRight: "15px" }}
                >
                  <HiOutlineHome style={{ marginRight: "8px" }} />
                  Back to Home
                </Button>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline-primary"
                  className="error-btn secondary-btn"
                >
                  <HiOutlineRefresh style={{ marginRight: "8px" }} />
                  Try Again
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        .error-section {
          position: relative;
          padding-top: 150px;
          padding-bottom: 100px;
          background: 
            radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 153, 204, 0.08) 0%, transparent 50%),
            var(--primary-bg);
          min-height: 100vh;
        }
        
        .error-content {
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.15),
            0 0 20px rgba(0, 217, 255, 0.1);
        }
        
        .error-code {
          font-size: 8em;
          font-weight: 900;
          background: linear-gradient(135deg, #00d9ff, #33e6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          text-shadow: 0 0 30px rgba(0, 217, 255, 0.3);
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
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
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
        
        @media (max-width: 768px) {
          .error-code {
            font-size: 5em;
          }
          
          .error-title {
            font-size: 2em;
          }
          
          .error-description {
            font-size: 1em;
            margin-bottom: 30px;
          }
          
          .error-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .error-btn {
            width: 200px;
            justify-content: center;
          }
        }
      `}</style>
    </Container>
  );
}

export default NotFound;
