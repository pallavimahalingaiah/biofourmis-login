import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Image } from "react-bootstrap";

import "./LoginPage.css";
import logo from "./images/logo-biofourmis.svg";

import LoginForm from "./component/loginForm";
import ForgotPasswordForm from "./component/forgotPasswordForm";

class LoginPage extends Component {
  state = {
    validated: false,
    showForgotPassword: false,
    blockPassword: false,
    emailValue: ""
  };

  handleFogotPassword = () => {
    this.setState({ showForgotPassword: true });
  };

  render() {
    return (
      <div className="layout-image">
        <Container>
          <Row>
            <Col xs>
              <Modal
                show={true}
                aria-labelledby="contained-modal-title-vcenter"
                animation={false}
                backdrop={false}
                dialogClassName="modal-width"
              >
                <Modal.Header className="loginpage-logo">
                  <Modal.Title id="contained-modal-title-vcenter">
                    <Container fluid>
                      <Row>
                        <Col xs={12}>
                          <Image src={logo} alt="logo" />
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Header className="loginpage-login-tab">
                  <Container fluid>
                    <Row>
                      {this.state.showForgotPassword ? (
                        <Col xs style={{ textAlign: "center" }}>
                          <Button
                            active
                            variant="link"
                            className="loginpage-forgot-Password-tab-btn"
                          >
                            Create new password
                          </Button>
                        </Col>
                      ) : (
                        <>
                          <Col xs={5}>
                            <Button
                              active
                              variant="link"
                              className="loginpage-login-tab-btn"
                            >
                              Login
                            </Button>
                          </Col>

                          <Col className="loginpage-forgot-password ">
                            <Button
                              variant="link"
                              onClick={this.handleFogotPassword}
                            >
                              Forgot Password?
                            </Button>
                          </Col>
                        </>
                      )}
                    </Row>
                  </Container>
                </Modal.Header>
                <Modal.Body className="loginpage-modal-body">
                  {this.state.showForgotPassword ? (
                    <ForgotPasswordForm />
                  ) : (
                    <LoginForm></LoginForm>
                  )}
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
