import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class LoginPage extends Component {
  state = {};

  render() {
    return (
      <div className="layout-image">
        <Container>
          <Row
            className="justify-content-center position-relative border border-primary rounded m-auto"
            style={{ top: "10rem", width: "50%" }}
          >
            <Col xs lg="2">
              1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
