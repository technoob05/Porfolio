import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube, BsPlay } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SiKaggle } from "react-icons/si";
import { FaStar, FaTag } from "react-icons/fa";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className={`project-card-view ${props.featured ? 'featured-project' : ''}`}>
      {props.featured && (
        <div className="project-featured-badge">
          <FaStar />
          <span>FEATURED</span>
        </div>
      )}
      
      {props.category && (
        <div className="project-category-badge">
          <FaTag />
          <span>{props.category}</span>
        </div>
      )}
      
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {props.techStack && (
          <div className="tech-stack-container">
            <div className="tech-stack-label">
              <span>Tech Stack:</span>
            </div>
            <div className="tech-stack-tags">
              {props.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="project-buttons">
          <Button variant="primary" href={props.ghLink} target="_blank" className="project-btn">
            {props.ghLink && props.ghLink.includes('kaggle.com') ? (
              <>
                <SiKaggle /> &nbsp;
                {"Kaggle"}
              </>
            ) : (
              <>
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </>
            )}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" className="project-btn">
              {props.demoLink.includes('drive.google.com') || props.demoLink.includes('.pdf') ? (
                <>
                  <HiOutlineDocumentText /> &nbsp;
                  {"Paper"}
                </>
              ) : props.demoLink.includes('youtube.com') || props.demoLink.includes('youtu.be') ? (
                <>
                  <BsYoutube /> &nbsp;
                  {"Video Demo"}
                </>
              ) : (
                <>
                  <CgWebsite /> &nbsp;
                  {"Live Demo"}
                </>
              )}
            </Button>
          )}

          {props.videoDemoLink && (
            <Button variant="outline-primary" href={props.videoDemoLink} target="_blank" className="project-btn video-demo-btn">
              <BsPlay /> &nbsp;
              {"Video Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
