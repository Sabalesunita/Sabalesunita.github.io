import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Project.css"
import zara from "../../assets/Home/images/zara.jpg";
import freshly from "../../assets/Home/images/freshly.jpeg";

import Particle from "./Particle";
import ProjectCards from "./ProjectCards";


function Projects() {
  return (
    <div className="home-container" id="project">

    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={freshly}
              isBlog={false}
              title="Freshly.com Clone"
              description={<div className="project-card-text"><p>Freshly is a New York-based prepared meal delivery company that delivers throughout the United States. 
                The company ships one million meals per week and delivers to the contiguous United States.</p>
                <h3>Tech Stack:</h3><p>HTML, CSS, JAVASCRIPT</p></div>}
              link="https://clonefreshly.netlify.app/" target="blank"
              link2="https://github.com/Sabalesunita/Freshly-clone" target="blank"

            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={zara}
              isBlog={false}
              title="Zara-home.com Clone"
              description={<div  className="project-card-text"><p>Discover the latest styles in bedding, fragrances, tableware, rugs, lamps, duvet covers, towels and 
                home accessories from the new Zara Home collection. </p>
                  <h3>Tech Stack:</h3> <p>HTML,CSS,ADVACED JAVASCRIPT,API</p></div>}
              link="https://zarahomeclone1.netlify.app/" target="blank"
              link2="https://github.com/Sabalesunita/Zara-home-clone" target="blank"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Projects;
