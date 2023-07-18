import React from "react";
import "../styles/home.css";
import img from "../img/bcg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CV from "../pdf/RitijanNurediniCV.pdf";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const notify = () => toast("CV is Downloading");
  return (
    <div className="home-container">
      <Container fluid>
        <Row>
          <Col
            className="text-container mb-5"
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
          >
            <h1>Hi,</h1>
            <h6>
              I'm <span>Ritjan</span>
            </h6>
            <h4>Web Developer | Front-End</h4>
            <div className="download-button">
              <a
                href={CV}
                download="Ritijan-Nuredini-CV"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn bg-light shadow" onClick={notify}>
                  Download My CV
                </button>
                <ToastContainer />
              </a>
            </div>
          </Col>

          <Col
            className="img-container ml-0 "
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={7}
          >
            <img src={img} width={"70%"} />
          </Col>

          <Col className="social-icon" xs={12} sm={12} md={1} lg={1} xl={1}>
            <a href="https://www.linkedin.com/in/ritjannuredini/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/ritjan.nuredini/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/_ritjan/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="https://github.com/RitjanN">
              <i class="fa-brands fa-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
