import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bitcointickets from "../../Assets/Projects/bitcointickets.png";

import chatify from "../../Assets/Projects/geno.png";
import guideme from "../../Assets/Projects/guideme.jpg";
import enigma from "../../Assets/Projects/enigma.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gen-o-Cademy"
              description="GENoCADEMY is a one stop solution for the passionate, committed and enthusiastic 
    teachers whose motive is to guide and contribute for the overall academic upliftment of the students 
    especially for the under privileged and poor economic background. This platform aims to bridge 
    the gap among the mentors and students."
              link="https://github.com/Abhas-15/GENoCADEMY"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitcointickets}
              isBlog={false}
              title="BitcoinTickets"
              description="This site has bitcoin payments, all invoice payments are donated to open source Bitcoin Core Development: https://hrf.org/devfund We used Concert Tickets as a proof of concept for how to easily integrate lightning payments into an eCommerce site. Just open it up, select some tickets (10 sats per ticket) and pay with a lightning wallet."
              link="https://github.com/Abhas-15/shell-hackathon-project"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={guideme}
              isBlog={false}
              title="Guide Me"
              description=" Students keep surfing through an endless list of websites, youtube videos and online tutorials looking for the right material and mentor which wastes a lot of their finite time and sometimes also leads to unwanted distractions.GuideMe, brings to you the exact solution to this problem. We organize all the resources recommended by peers and mentors. We also allow every student to create courses with useful links to videos, websites and books themselves so that they can also help the student community."
              link="https://github.com/Abhas-15/GuideMe"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={enigma}
              isBlog={false}
              title="Enigma"
              description="Enigma provides you with an exhilarating experience through the mysteries of the Universe, all while making you more curious and hungry for more!We used Three.js to add three-dimensional effects that can resonate with the viewers' imagination of the Universe. Further, in each snippet, one can directly navigate to the editorial page, which has a spectrum of detailed articles covering almost all topics one might be interested in. "
              link="https://github.com/Abhas-15/Enigma"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
