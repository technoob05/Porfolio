import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const myImg = "/avatar.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#1a1d29", textShadow: "none" }}>
              LET ME <span style={{ color: "#00d9ff" }}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about artificial intelligence and its potential to solve real-world problems! 🤖
              <br />
              <br />I specialize in programming languages like
              <i>
                <b style={{ color: "#00d9ff" }}> Python, C/C++, and JavaScript. </b>
              </i>
              <br />
              <br />
              My field of interests are building innovative &nbsp;
              <i>
                <b style={{ color: "#00d9ff" }}>AI Solutions and Machine Learning Models </b> and
                also in areas related to{" "}
                <b style={{ color: "#00d9ff" }}>
                  Natural Language Processing and Large Language Models.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing AI applications
              with <b style={{ color: "#00d9ff" }}>PyTorch, LangChain</b> and
              <i>
                <b style={{ color: "#00d9ff" }}>
                  {" "}
                  Modern AI Frameworks and Tools
                </b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: "#00d9ff" }}> Hugging Face, Google AI SDK, and FastAPI</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ 
              background: "linear-gradient(135deg, #00d9ff, #33e6ff)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "700",
              letterSpacing: "2px",
              textShadow: "0 0 20px rgba(0, 217, 255, 0.5)"
            }}>
              CONNECT WITH ME
            </h1>
            <p style={{ 
              fontSize: "1.1em", 
              color: "var(--text-secondary)", 
              fontWeight: "500",
              marginBottom: "25px" 
            }}>
              Let's build something amazing together • Available for collaborations
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/technoob05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/learningaiwithlosers/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="Facebook - Learning AI with Losers"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/loser1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://learningaiwithlosers.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Personal Website - Learning AI with Losers"
                >
                  <HiOutlineGlobeAlt />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
