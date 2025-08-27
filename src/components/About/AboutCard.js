import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span style={{ color: "#00d9ff" }}>Dao Sy Duy Minh </span>
            from <span style={{ color: "#00d9ff" }}> Dĩ An, Bình Dương, Vietnam.</span>
            <br />
            I am currently a third-year Artificial Intelligence student at University of Science (VNUHCM-US) with a strong expertise in natural language processing (NLP), machine learning, and large language model (LLM) integration.
            <br />
            I am also the Founder & Content Creator of Learning AI with Losers, an AI education platform with 5,000+ followers.
            <br />
            <br />
            Apart from AI research and development, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating AI Content & Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in AI Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source AI Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Blogs
            </li>
          </ul>

          <p style={{ color: "#00d9ff" }}>
            "Passionate about advancing NLP research and building impactful AI solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Duy Minh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
