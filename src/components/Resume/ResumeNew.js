import React, { useState, useEffect } from "react";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useLanguage } from "../../contexts/LanguageContext";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [resumeLanguage, setResumeLanguage] = useState('EN');
  const { t } = useLanguage();

  const pdfFiles = {
    EN: "/DaoSyDuyMinh_EN.pdf",
    VN: "/DaoSyDuyMinh_VN.pdf"
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Col md={6} style={{ textAlign: "center" }}>
            <h1 className="project-heading" style={{ marginBottom: "20px" }}>
              {t('resume.title')}
            </h1>
            <ButtonGroup style={{ marginBottom: "20px" }}>
              <Button
                variant={resumeLanguage === 'EN' ? 'primary' : 'outline-primary'}
                onClick={() => setResumeLanguage('EN')}
                style={{ minWidth: "120px" }}
              >
                {t('resume.english')}
              </Button>
              <Button
                variant={resumeLanguage === 'VN' ? 'primary' : 'outline-primary'}
                onClick={() => setResumeLanguage('VN')}
                style={{ minWidth: "120px" }}
              >
                {t('resume.vietnamese')}
              </Button>
            </ButtonGroup>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdfFiles[resumeLanguage]}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('resume.download')} ({resumeLanguage === 'EN' ? t('resume.english') : t('resume.vietnamese')})
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfFiles[resumeLanguage]} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFiles[resumeLanguage]}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('resume.download')} ({resumeLanguage === 'EN' ? t('resume.english') : t('resume.vietnamese')})
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
