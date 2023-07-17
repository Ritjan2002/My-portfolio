import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import img1 from '../img/project-1.jpg';
import img2 from '../img/project-2.jpg';
import img3 from '../img/project-3.jpg';
import '../styles/projects.css';

const Projects = () => {
  return (
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <Container fluid className='projects-container'>
      <Row>
        <Col className='projects-text'><h1>Projects</h1></Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} className='card-container'>
        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body className='card-body'>
        <Card.Title>Ball-It</Card.Title>
        <Card.Text>
          This Project is made with HTML, Css, JavaScript and Bootstrap.
        </Card.Text>
        <a href="https://ball-it.netlify.app/"><Button className='btn bg-light shadow button3'>Visit Web</Button></a>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={12} sm={12} md={6} lg={4} xl={4} className='card-container'>
        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body className='card-body'>
        <Card.Title>Rent a Car</Card.Title>
        <Card.Text>
          This Project is made with HTML, Css, JavaScript and Bootstrap.
        </Card.Text>
        <a href="https://rent-a-car-ks.netlify.app/"><Button className='btn bg-light shadow button3'>Visit Web</Button></a>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={12} sm={12} md={6} lg={4} xl={4} className='card-container'>
        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body className='card-body'>
        <Card.Title>Rent a Car</Card.Title>
        <Card.Text>
          This Project is made with HTML, Css, JavaScript, Bootstrap and PHP.
        </Card.Text>
        <a href="https://libelium-sensors.000webhostapp.com/"><Button className='btn bg-light shadow button3'>Visit Web</Button></a>
      </Card.Body>
    </Card>
        </Col>

        
      </Row>
    </Container>
    </div>
  )
}

export default Projects
