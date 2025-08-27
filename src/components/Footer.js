import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Dao Sy Duy Minh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} LAWL</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/technoob05"
                className="footer-social-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/learningaiwithlosers/"
                className="footer-social-link"
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook - Learning AI with Losers"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/loser1/"
                className="footer-social-link"
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://learningaiwithlosers.com/"
                className="footer-social-link"
                target="_blank" 
                rel="noopener noreferrer"
                title="Personal Website"
              >
                <HiOutlineGlobeAlt />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
