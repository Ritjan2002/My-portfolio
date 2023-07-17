import React from "react";
import { Container, Row, Col, Form, Button, Group } from "react-bootstrap";
import "../styles/contact.css";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const notify = () => toast("Successfully");
  return (
    <div data-aos="fade-left">
    <Container fluid className="contact-container">
      <Row>
        <Col className="title">
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col className="form-container">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter your name:</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter your surname:</Form.Label>
              <Form.Control type="text" placeholder="Your surname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>

           <Button className="btn bg-light shadow button2"  onClick={notify}>
              Submit
            </Button><ToastContainer /> 
            
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Contact;
