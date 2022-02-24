import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhas Abhirup Behera </span>
            from <span className="purple"> Balasore, India.</span>
            <br />I am a undergard pursuing Computer Science and Engineering in NIT Rourkela.
            <br />My coding profiles are 
            <ul>
            <li className="about-activity">
              <ImPointRight /> <a href="https://codeforces.com/profile/Ab_has" >Codeforces</a> - <span className="purple">Specialist (1522) </span>
            </li>
            <li className="about-activity">
              <ImPointRight />  <a href="https://www.codechef.com/users/abhasabhirup15">Codechef</a> - <span className="purple">4 Star (1945) </span>
            </li>
          </ul>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Exploring beyond my imagination !"{" "}
          </p>
          <footer className="blockquote-footer">Abhas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
