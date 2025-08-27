import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project Images
const nutriCareAgents = "/NutriCareAgents.png";
const stemVerseProject = "/Stem_Verse.png";
const mindMateAgents = "/Mindgames_Agents.jpg";
const mnistClassifier = "/MNIST_Classifier.png";
const gTrafficHeroes = "/G-TrafficHeroes.png";
const videoDownloader = "/video_downloader.png";
const vietnameseFoodScraping = "/Vietnamese_food_web_scrapping.png";
const eventBasedRetrieval = "/Leveraging Lightweight Entity Extraction for Scalable.png";
const eventaProject = "/Eventa_Track1_Event_based_Image_Captioning.png";
const caroGameProject = "/CARO.jpg";
const llmSafetyPractice = "/LLm_safety_In_Practice_Red_team_GPT.png";
const neuripsCodeGolf = "/NeurIPS_2025_Google_Code_Golf_Championship.png";
const layoutDetectionProject = "/layout_detection_aic_hcmus.png";
const tomJerryProject = "/Tom_And_Jerry.png";
const abideProject = "/Mindgames_Agents.jpg";
const remoteDesktopProject = "/Remote-PC-Control_via_gmail.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong style={{ color: "#00d9ff" }}>Works </strong>
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Here are my featured projects spanning AI research, web development, and data science.
        </p>

        {/* 🏆 FEATURED RESEARCH PROJECTS */}
        <div className="featured-projects-section">
          <h2 className="section-heading">
            🏆 <span style={{ color: "#00d9ff" }}>Featured Research</span> Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eventBasedRetrieval}
                isBlog={false}
                title="Leveraging Lightweight Entity Extraction for Scalable Event-Based Image Retrieval"
                description="Advanced computer vision research project implementing lightweight entity extraction techniques for scalable event-based image retrieval systems. Achieved Top 4 in EVENTA Grand Challenge Track 2 at ACM Multimedia 2025."
                ghLink="https://github.com/PhamPhuHoa-23/Event-Based-Image-Retrieval"
                demoLink="https://drive.google.com/file/d/1cXW2PCxcR1JnqCtsvv0cDAWGuMkiBPOV/view"
                techStack={["Python", "PyTorch", "Computer Vision", "Deep Learning", "CLIP", "Transformers"]}
                featured={true}
                category="Research"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eventaProject}
                isBlog={false}
                title="Event-Enriched Image Captioning"
                description="Cutting-edge research in multimodal AI focusing on event-enriched image captioning systems. Combines computer vision and natural language processing to generate contextually aware captions. Top 3 achievement in EVENTA Track 1."
                ghLink="https://github.com/PhamPhuHoa-23/Event-Enriched-Image-Captioning-ReZeroSlavery"
                demoLink="https://drive.google.com/file/d/1_-0QwLfkggtv_6t4AWOEB34_ba6S5AiL/view?usp=drive_link"
                techStack={["Python", "PyTorch", "CLIP", "Transformers", "NLP", "Computer Vision"]}
                featured={true}
                category="Research"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nutriCareAgents}
                isBlog={false}
                title="NutriCare Agents"
                description="AI-powered nutrition guidance system implementing responsible AI principles. Multi-agent architecture for personalized dietary recommendations and health monitoring. 2nd Runner-up at GDGoC Hackathon Vietnam 2025."
                ghLink="https://github.com/technoob05/NutriCare_Agents"
                demoLink="https://nutri-care-agents.vercel.app"
                videoDemoLink="https://www.youtube.com/watch?v=6d3UbajcSWw"
                techStack={["Next.js", "TypeScript", "AI Agents", "Google AI", "TailwindCSS", "Firebase"]}
                featured={true}
                category="AI Application"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={vietnameseFoodScraping}
                isBlog={false}
                title="Vietnamese Food Web Scraping & Analysis"
                description="Comprehensive data science project focusing on Vietnamese cuisine analysis through web scraping, data processing, and machine learning. Features automated data collection, sentiment analysis, price prediction, and interactive visualizations."
                ghLink="https://github.com/technoob05/WebScrappingFoodVietNam"
                demoLink="https://vietnamese-food-analysis.streamlit.app/"
                techStack={["Python", "Scrapy", "Pandas", "Scikit-learn", "Streamlit", "Data Analysis"]}
                featured={true}
                category="Data Science"
              />
            </Col>
          </Row>
        </div>

        {/* 🌟 MAJOR PROJECTS */}
        <div className="major-projects-section">
          <h2 className="section-heading">
            🌟 <span style={{ color: "#00d9ff" }}>Major Development</span> Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={stemVerseProject}
                isBlog={false}
                title="STEMverse: A Cosmic Learning Adventure"
                description="An innovative AI-powered educational platform that transforms STEM learning into an engaging cosmic adventure. Features include an AI storyteller with Gemini integration, cosmic AI tutor with voice interaction, advanced gamification system, and 11 stunning themes."
                ghLink="https://github.com/technoob05/stemverse_-a-cosmic-learning-adventure"
                demoLink="https://stemverse-a-cosmic-learning-adventure.vercel.app/"
                techStack={["React", "TypeScript", "Gemini AI", "Framer Motion", "CSS3", "Vite"]}
                category="EdTech"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={mindMateAgents}
                isBlog={false}
                title="MindMate Agents"
                description="A comprehensive mental wellness platform leveraging AI-powered tools including empathetic chat, intelligent journaling with mood analysis, moderated multi-user support groups, and interactive AI avatars."
                ghLink="https://github.com/technoob05/MindMate_Agents"
                demoLink="https://mindmate-agents.vercel.app/"
                techStack={["Next.js", "TypeScript", "AI/ML", "TailwindCSS", "PostgreSQL", "Google Services"]}
                category="Healthcare"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gTrafficHeroes}
                isBlog={false}
                title="G-Traffic Heroes: AI Traffic Safety Education"
                description="An educational AI-powered game designed to teach traffic safety through interactive gameplay. Features AI-driven scenarios, real-time feedback, and gamified learning experiences. Promotes road safety awareness among users of all ages."
                ghLink="https://github.com/technoob05/G-Traffic-Heroes"
                demoLink="https://g-traffic-heroes.vercel.app/"
                techStack={["Unity", "C#", "AI/ML", "Game Development", "Educational Tech"]}
                category="EdTech"
              />
            </Col>
          </Row>
        </div>

        {/* 🏅 COMPETITION & RESEARCH PROJECTS */}
        <div className="competition-projects-section">
          <h2 className="section-heading">
            🏅 <span style={{ color: "#00d9ff" }}>Competition & Research</span> Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={neuripsCodeGolf}
                isBlog={false}
                title="NeurIPS 2025 - Google Code Golf Championship"
                description="Competitive programming excellence in Google's official ARC-AGI benchmark challenge. Solved 127 problems using minimal character count optimization, achieving public score of 243,245.294 points. Implemented Python programs for complex grid transformation tasks."
                ghLink="https://www.kaggle.com/code/daosyduyminh/solved-127-problems-local-pleaseupvote"
                techStack={["Python", "Competitive Programming", "Algorithms", "ARC-AGI", "Code Golf"]}
                category="Competition"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={llmSafetyPractice}
                isBlog={false}
                title="LLM Safety in Practice: Advanced Red-teaming"
                description="State-of-the-art LLM security assessment framework implementing cutting-edge jailbreak techniques including FlipAttack (98% success rate on GPT-4o), TokenBreak, LARGO (+44% improvement), and MIST. Built for OpenAI Red-teaming Challenge."
                ghLink="https://www.kaggle.com/code/daosyduyminh/llm-safety-in-practice/notebook"
                techStack={["Python", "LLM Security", "Jailbreak Techniques", "OpenAI", "Red-teaming"]}
                category="AI Security"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={layoutDetectionProject}
                isBlog={false}
                title="Layout Detection AI - HCMUS Research"
                description="Advanced document layout analysis system achieving 95% accuracy using state-of-the-art computer vision. Features multi-element detection (text, tables, charts), hierarchical structure analysis, and OCR integration."
                ghLink="https://github.com/technoob05/Layout_Detection_AIC_HCMUS"
                demoLink="https://layout-detection-aic-hcmus.vercel.app/"
                techStack={["React", "TypeScript", "YOLOv8", "Faster R-CNN", "PyTorch", "Computer Vision"]}
                category="Research"
              />
            </Col>
          </Row>
        </div>

        {/* 📚 ADDITIONAL PROJECTS */}
        <div className="additional-projects-section">
          <h2 className="section-heading">
            📚 <span style={{ color: "#00d9ff" }}>Additional</span> Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={mnistClassifier}
                isBlog={false}
                title="MNIST Digit Classifier Web App"
                description="Real-time handwritten digit recognition web application using custom neural network trained on MNIST dataset. Features webcam capture, image upload, confidence scoring, and advanced preprocessing pipeline."
                ghLink="https://github.com/technoob05/MNIST-Digit-Classifier-WEB"
                demoLink="https://mnist-classifier-web.vercel.app/"
                techStack={["React", "TypeScript", "TensorFlow.js", "Flask", "OpenCV", "Machine Learning"]}
                category="ML Demo"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={videoDownloader}
                isBlog={false}
                title="Multi-Platform Video Downloader"
                description="Comprehensive web application for downloading videos from multiple platforms including YouTube, X (Twitter), TikTok, Instagram, and Facebook. Features multi-format support (MP4, WebM), audio-only downloads, and batch processing."
                ghLink="https://github.com/technoob05/Video-downloader"
                demoLink="https://github.com/technoob05/Video-downloader/releases"
                techStack={["Python", "Flask", "yt-dlp", "Beautiful Soup", "HTML/CSS", "Web Scraping"]}
                category="Utility"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={caroGameProject}
                isBlog={false}
                title="Advanced Tic-Tac-Toe Game (C/C++)"
                description="Comprehensive console-based game featuring multiple game modes (Player vs Player, Player vs Bot with Easy/Hard difficulty), sound effects, ASCII art characters (Pikachu, Charizard, Meowtwo), save/load functionality, and animated UI."
                ghLink="https://github.com/technoob05/Tik-Tak-Toe-project"
                demoLink="https://www.youtube.com/watch?v=u-_KmmpESVs&t=32s&ab_channel=M%E1%BB%B9LinhB%C3%A0ng"
                techStack={["C++", "Visual Studio", "Game Development", "File I/O", "Audio Integration", "System Programming"]}
                category="Game"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={tomJerryProject}
                isBlog={false}
                title="Tom and Jerry Maze Solver"
                description="Developed a puzzle game inspired by Tom and Jerry, implementing graph algorithms such as DFS, BFS, Dijkstra, and A* for pathfinding in Python. Features intelligent maze solving with multiple algorithm comparisons and interactive gameplay."
                ghLink="https://github.com/technoob05/Tom-and-Jerry-Maze-Game-"
                demoLink="https://www.youtube.com/watch?v=ju5hfgw210U&t=78s&ab_channel=Ki%C3%AAnNguy%E1%BB%85nTr%E1%BA%A7nTrung"
                techStack={["Python", "PyGame", "Graph Algorithms", "DFS/BFS", "A* Algorithm", "Pathfinding"]}
                category="Algorithm"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={abideProject}
                isBlog={false}
                title="PCA and Clustering on ABIDE II Dataset"
                description="Performed dimensionality reduction (PCA) and clustering on the highly noisy ABIDE II dataset, aiming to identify patterns linked to autism spectrum disorder (ASD). Achieved up to 62% clustering accuracy in distinguishing ASD-related subgroups."
                ghLink="https://github.com/NLPQuy"
                techStack={["Python", "NumPy", "scikit-learn", "Pandas", "PCA", "Clustering"]}
                category="Data Science"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={remoteDesktopProject}
                isBlog={false}
                title="Remote Desktop Control via Gmail"
                description="Built a socket-based application enabling remote computer control authenticated through Gmail, leveraging C# and the .NET Framework. Features secure authentication, real-time control capabilities, and network communication protocols."
                ghLink="https://github.com/NLPQuy"
                techStack={["C#", ".NET Framework", "Socket Programming", "Gmail API", "Network Security", "Authentication"]}
                category="Security"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;