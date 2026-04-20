import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/myStyle.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "3.6em", paddingBottom: "20px" ,color:"rgb(31,31,31)"}}>
              About <strong className="orange">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={6}
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="orange">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="orange">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
