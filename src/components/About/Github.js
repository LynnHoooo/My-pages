import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="orange">Code</strong>
      </h1>
      <GitHubCalendar
        username="lucyling24"
        blockSize={15}
        blockMargin={5}
        color="rgb(255, 213, 159)"
        fontSize={16}
      />
        <p align = "center" >
            <img style={{width:"80vw"}} src = "https://github-readme-activity-graph.vercel.app/graph?username=LucyLing24&theme=gruvbox&radius=64&bg_color=ffffff" />
        </p>
    </Row>
  );
}

export default Github;
