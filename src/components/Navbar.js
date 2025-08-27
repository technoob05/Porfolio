import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import ButtonGroup from "react-bootstrap/ButtonGroup"; // Removed
// import logo from "../Assets/logo.png"; // Removed
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im"; // Removed
import {
  AiFillStar,
} from "react-icons/ai";

import { // New Heroicons imports
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCollection,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt
} from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t } = useLanguage(); // Only t is needed now

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <div className="modern-logo"> {/* New logo div */}
            <span className="logo-text">LAWL</span> {/* New logo text */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <HiOutlineHome style={{ marginBottom: "2px" }} /> {t('nav.home')} {/* New icon */}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <HiOutlineUser style={{ marginBottom: "2px" }} /> {t('nav.about')} {/* New icon */}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <HiOutlineCollection // New icon
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t('nav.projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <HiOutlineDocumentText style={{ marginBottom: "2px" }} /> {t('nav.resume')} {/* New icon */}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://learningaiwithlosers.com/"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineGlobeAlt style={{ marginBottom: "2px" }} /> {t('nav.blog')} {/* New icon */}
              </Nav.Link>
            </Nav.Item>

            {/* Removed language switcher */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/technoob05"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
