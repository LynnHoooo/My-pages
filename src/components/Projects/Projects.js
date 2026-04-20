import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leisurely from "../../Assets/Projects/leisure.png"
import old from "../../Assets/Projects/old.png"
import ar from "../../Assets/Projects/ar.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="pink">Projects </strong>
        </h1>
        <p style={{ color: "rgba(70, 70, 70, 0.58)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath="https://github.com/LucyLing24/digital-human-face-and-body-management-system/assets/56916034/f75964cd-28df-4fa1-ae96-f0eecf068a3c"
                isBlog={false}
                title="Digital Human Face and Body Management System"
                description="This project focuses on the face and body movements of virtual digital human, and has realized the functions of face and Motion capture and emotion classification in the real world on the Web side, desktop side and Unreal Engine model side, as well as the binding of digital humans expressions based on cameras. "
                ghLink="https://github.com/LucyLing24/digital-human-face-and-body-management-system"
                demoLink="https://youtu.be/WLDir0Zd4wc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath="https://user-images.githubusercontent.com/56916034/236677532-5e571507-8262-464a-927d-a4c29d18c2fd.png"
                isBlog={false}
                title="CEO Copilot"
                description="This product is designed to help individuals who are interested in starting a business with the process of ideation, market research, and further product-market fit."
                ghLink="https://github.com/LucyLing24/ceo-copilot-frontend/blob/main/README.md"
                demoLink="https://ceo-copilot.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath="https://user-images.githubusercontent.com/56916034/236676749-6ea29c21-861d-474c-9355-3ce69aef8e88.png"
                isBlog={false}
                title="Deep Brain Stimulation Surgeries Digital-twin System"
                description="Digital-twin System Enabled Deep Brain Stimulation Surgeries, including modeling the brain nuclei with Unity, embedding the React web page with Webgl, and achieving bidirectional communication between React and Webgl."
                ghLink="https://github.com/LucyLing24/deep-brain-stimulation-surgeries-digital-twin-system"
                demoLink="https://youtu.be/uXL2lHH6JdY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leisurely}
              isBlog={false}
              title="Youyou Self-discipline (悠游自律)"
              description="A check-in software that leverages the psychological basis of gaming addiction to promote self-discipline. Upon completing a custom task on the check-in page, users are rewarded with a game ticket to enhance motivation."
              ghLink="https://github.com/LucyLing24/youyou-self-discipline"
              demoLink="https://youtu.be/3k4A3mwBB-U"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={old}
              isBlog={false}
              title="Worry-free Rescue System"
              description="Help rescue teams find lost elderly people, including a collaborative rescue APP, a family report WeChat mini program, and a unified management website."
              ghLink="https://github.com/LucyLing24/worry-free-intelligent-rescue-system"
              demoLink="https://youtu.be/4hMyz3PjMEo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath="https://user-images.githubusercontent.com/56916034/236301558-5b39edb8-0de1-43c2-a7f7-fbebdfcaecfb.PNG"
                isBlog={false}
                title="CloudKnowledge Education Assistant App (云知教育)"
                description="The CloudKnowledge Education Assistant App is an innovative platform that brings together all stakeholders of the education industry chain, including schools, institutions, teachers, and students. "
                ghLink="https://github.com/LucyLing24/cloud-knowledge-education-assistant"
                demoLink="https://youtu.be/cQ2KP-zJ2Ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath="https://user-images.githubusercontent.com/56916034/236677242-e7448eac-6dd1-4474-a26d-42cbcf2825a1.png"
                isBlog={false}
                title="Longting Restaurant Order Mini App"
                description=""
                ghLink=""
                demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ar}
              isBlog={false}
              title="AR Sandbox"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
