import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Image
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import "./LoginPage.css";
import logo from "./images/logo-biofourmis.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class LoginPage extends Component {
  state = {
    validated: false,
    blockPassword: false,
    emailValue: ""
  };

  validationSchema = () =>
    Yup.object().shape({
      email: Yup.string()
        .email("*Must be a valid email address")
        .max(100, "*Email must be less than 100 characters")
        .required("*Email is required")
      /* password: Yup.string()
        .min(8, "*Password must have at least 8 characters")
        .max(100, "*Password can't be longer than 100 characters")
        .required("*Password is required") */
    });

  render() {
    return (
      <div className="layout-image">
        <Modal
          show={true}
          aria-labelledby="contained-modal-title-vcenter"
          animation={false}
          backdrop={false}
          //size="md"
          dialogClassName="modal-40w"
        >
          <Modal.Header className="loginpage-logo">
            <Modal.Title id="contained-modal-title-vcenter">
              <Container>
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
                  <Button active variant="link">
                    Forgot Password?
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Header>
          <Modal.Body className="loginpage-modal-body">
            <Container>
              <Row className="show-grid">
                <Col xs>
                  <Formik
                    validationSchema={this.validationSchema}
                    onSubmit={console.log}
                    initialValues={{
                      email: "",
                      password: ""
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors
                    }) => (
                      <Form noValidate>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleChange}
                            onKeyPress={handleBlur}
                            value={values.email}
                            className={errors.email ? "error" : null}
                          />
                          {errors.email ? (
                            <div className="error-message">{errors.email}</div>
                          ) : null}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className={
                              touched.password && errors.password
                                ? "error"
                                : null
                            }
                          />
                          {touched.password && errors.password ? (
                            <div className="error-message">
                              {errors.password}
                            </div>
                          ) : null}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          {/* <Modal.Footer className="loginpage-login-btn">
            <Button>Login</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}

export default LoginPage;
