import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { FaTrophy, FaMedal, FaCertificate, FaAward, FaTimes } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineEye } from "react-icons/hi";
import "./TimelineAchievements.css";

function Achievements() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleImageClick = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setShowModal(true);
  };

  const achievements = [
    // 🏆 PRIORITY: Research Excellence & Competition Wins
    {
      id: 1,
      title: "Top 3 - EVENTA Grand Challenge Track 1: Event-Enriched Image Captioning",
      organization: "ACM Multimedia 2025 (Rank A*)",
      date: "2025",
      description: "Top 3 achievement in premier computer vision competition focusing on event-based image understanding with team Re-zero Slavery.",
      icon: <FaTrophy />,
      images: [
        "/Certificate/Event_based_Image_caption_certificate.png",
        "/Certificate/Event_Image_Caption_Eventa_LeaderBoard.jpg"
      ],
      color: "#FFD700",
      featured: true
    },
    {
      id: 2,
      title: "Top 4 - ENTRep Challenge Track 2: Image-to-Image Retrieval",
      organization: "ACM Multimedia 2025 (Rank A*)",
      date: "2025",
      description: "Top 4 performance in medical AI challenge for ENT endoscopy analysis and vision-language AI systems.",
      icon: <FaMedal />,
      images: [
        "/Certificate/Event_based_Image_retrivial_Certificate.png"
      ],
      color: "#E17055",
      featured: true
    },
    {
      id: 3,
      title: "Top 4 - EVENTA Grand Challenge Track 2: Event-Based Image Retrieval",
      organization: "ACM Multimedia 2025 (Rank A*)",
      date: "2025",
      description: "Top 4 achievement in advanced computer vision retrieval systems with team Sharingan Retrievers.",
      icon: <FaMedal />,
      images: [
        "/Certificate/Event_based_Image_retrivial_Certificate.png",
        "/Certificate/Event_based_Image_retrivial_Eventa_LeaderBoard.jpg"
      ],
      color: "#A29BFE",
      featured: true
    },
    {
      id: 4,
      title: "2nd Runner-up - GDGoC Hackathon Vietnam 2025: Responsible AI",
      organization: "Google Developer Groups",
      date: "June 2025",
      description: "National second runner-up with NutriCare Agents, implementing responsible AI principles in nutrition guidance.",
      icon: <FaTrophy />,
      images: [
        "/Certificate/Gdgoc_VietNam_hackathon_2nd_runner_UP.png"
      ],
      color: "#96CEB4",
      featured: true
    },
    
    // 🌟 Major Achievements
    {
      id: 5,
      title: "Kaggle Expert Achievement",
      organization: "Kaggle",
      date: "August 20, 2025",
      description: "Achieved Expert status on Kaggle platform, demonstrating advanced machine learning and data science skills through competitions and contributions.",
      icon: <FaTrophy />,
      images: [
        "/Certificate/Kaggle_Expert_certificate.png"
      ],
      color: "#20BEFF"
    },
    {
      id: 6,
      title: "Rising Star Prize - Vietnam Youth Start-up Challenge 2025",
      organization: "Summit Education Services",
      date: "August 2025",
      description: "Recognized as a rising innovator in Vietnam's startup ecosystem with innovative AI solutions.",
      icon: <FaTrophy />,
      images: [
        "/Certificate/VietNamYouthStartUp_RisingStar_Certificate.jpg"
      ],
      color: "#FD79A8"
    },
    {
      id: 7,
      title: "Winner - StartWell Student Wellness Hackathon 2025",
      organization: "My Healthy Beginning",
      date: "July 2025",
      description: "First place winner developing innovative mental health AI solutions for student wellness.",
      icon: <FaTrophy />,
      images: [
        "/Certificate/Start_The_Student_StartWell_Hackathon_Certificate.png"
      ],
      color: "#45B7D1"
    },
    {
      id: 8,
      title: "3rd Place - CS Base Hack4Health 2025 (Beginner Track)",
      organization: "CS Base Vietnam",
      date: "2025",
      description: "Third place achievement in healthcare innovation hackathon, developing AI solutions for medical applications.",
      icon: <FaMedal />,
      images: [
        "/Certificate/CS_Base_Hack4Health_2025_Third_Place_Begineer_Track_Certificate.png"
      ],
      color: "#FF6B6B"
    },
    {
      id: 9,
      title: "TOP 24 - Hack CX Together 2025",
      organization: "Techcombank (TCB)",
      date: "June 2025",
      description: "Selected among top 24 teams nationwide in banking technology innovation challenge.",
      icon: <FaAward />,
      images: [
        "/Certificate/Hack_x_Bank_certificate.png"
      ],
      color: "#FFEAA7"
    },
    {
      id: 10,
      title: "Top 12 - Chinh Phục Nhà Tuyển Dụng HCMUS",
      organization: "VNUHCM - University of Science",
      date: "May 2025",
      description: "Top 12 finalist in university's premier career development and employer engagement program.",
      icon: <FaAward />,
      images: [
        "/Certificate/Top12_chinh_phuc_nha_tuyen_dung_Hcmus_cert.jpg"
      ],
      color: "#74B9FF"
    },
    
    // 📚 Professional Development
    {
      id: 11,
      title: "Hugging Face Agents Course Certification",
      organization: "Hugging Face",
      date: "July 2025",
      description: "Completed advanced AI agents course, mastering LLM integration and multi-agent systems.",
      icon: <FaCertificate />,
      images: [
        "/Certificate/Agent_Course_HuggingFace_Certificate.jpg"
      ],
      color: "#4ECDC4"
    },
    {
      id: 12,
      title: "Machine Learning in Production Specialization",
      organization: "DeepLearning.AI",
      date: "March 2025",
      description: "Completed comprehensive MLOps specialization covering production ML systems and deployment strategies.",
      icon: <FaCertificate />,
      images: [
        "/Certificate/MLOPS_DeepLearningAI_Certificate.png"
      ],
      color: "#00B894"
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12} className="achievements-timeline-section">
        <h3 className="timeline-heading">
          <strong style={{ color: "#00d9ff" }}>Achievement Timeline</strong>
        </h3>
        <div className="timeline-container">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className={`achievement-card ${achievement.featured ? 'featured' : ''}`} style={{ borderLeftColor: achievement.color }}>
                  {achievement.featured && (
                    <div className="featured-badge">
                      <span>🏆 FEATURED</span>
                    </div>
                  )}
                  <div className="achievement-header">
                    <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                      {achievement.icon}
                    </div>
                    <div className="achievement-date">
                      <HiOutlineCalendar />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                  <div className="achievement-body">
                    <div className="achievement-images">
                      {achievement.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex} 
                          className="achievement-image"
                          onClick={() => handleImageClick(image, achievement.title)}
                        >
                          <img src={image} alt={`${achievement.title} - Certificate ${imgIndex + 1}`} />
                          <div className="image-overlay">
                            <HiOutlineEye />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="achievement-info">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-organization">{achievement.organization}</p>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-marker" style={{ backgroundColor: achievement.color }}>
                {achievement.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Image Zoom Modal */}
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          className="certificate-modal"
        >
          <Modal.Header className="certificate-modal-header">
            <Modal.Title className="certificate-modal-title">
              {selectedTitle}
            </Modal.Title>
            <button 
              className="certificate-modal-close"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
          </Modal.Header>
          <Modal.Body className="certificate-modal-body">
            {selectedImage && (
              <div className="certificate-image-container">
                <img 
                  src={selectedImage} 
                  alt={selectedTitle}
                  className="certificate-full-image"
                />
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
}

export default Achievements;