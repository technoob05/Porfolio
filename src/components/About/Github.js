import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong style={{ color: "#00d9ff" }}>Code</strong>
      </h1>
      <GitHubCalendar
        username="technoob05"
        blockSize={15}
        blockMargin={5}
        color="#00d9ff"
        fontSize={16}
        theme={{
          light: ['#161b22', '#0d1117', '#00374d', '#0099cc', '#00d9ff'],
          dark: ['#161b22', '#0d1117', '#00374d', '#0099cc', '#00d9ff']
        }}
      />
    </Row>
  );
}

export default Github;
