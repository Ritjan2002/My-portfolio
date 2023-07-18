import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillBar from "react-skillbars";
import "../styles/skills.css";

const Skills = () => {
  const skills = [
    { type: "HTML", level: 100 },
    { type: "CSS", level: 100 },
    { type: "JavaScript", level: 75 },
    { type: "Bootstrap", level: 90 },
    { type: "ReactJs", level: 40 },
    { type: "Microsoft", level: 100 },
    { type: "Adobe Photoshop", level: 80 },
    { type: "Adobe Illustrator", level: 70 },
    { type: "Android Studio", level: 40 },
    { type: "SQL Server", level: 60 },
    { type: "Java", level: 60 },
    { type: "jQuery", level: 70 },
  ];

  const colors = {
    bar: "black",
    title: {
      text: "#FEFFFF",
      background: "#17252A",
    },
  };
  return (
    <div data-aos="flip-down">
      <Container fluid className="skills-container">
        <Row>
          <Col className="skills">
            <h1>Skills</h1>
          </Col>
        </Row>
        <Row>
          <Col className="skills-list">
            <SkillBar skills={skills} height={"5vh"} colors={colors} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
