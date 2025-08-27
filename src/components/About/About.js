import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png"; // Removed old image import
import Toolstack from "./Toolstack";
import Achievements from "./Achievements"; // New import
import "./ModernAbout.css"; // New import for about illustration

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong style={{ color: "#00d9ff" }}>I'M</strong> {/* Heading color fix */}
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <div className="modern-about-illustration"> {/* Replaced img with div */}
              <div className="about-shape-1"></div>
              <div className="about-shape-2"></div>
              <div className="about-shape-3"></div>
              <div className="about-ai-symbol">
                <div className="ai-circle"></div>
                <div className="ai-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong style={{ color: "#00d9ff" }}>Skillset </strong> {/* Heading color fix */}
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong style={{ color: "#00d9ff" }}>Tools</strong> I use {/* Heading color fix */}
        </h1>
        <Toolstack />
        <Achievements /> {/* New component rendered */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
