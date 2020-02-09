import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Image,
  InputGroup
} from "react-bootstrap";

import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

class LoginForm extends Component {
  state = {
    passwordHidden: true
  };

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required")
  });

  handleSubmit = (values, { resetForm, setSubmitting }) => {
    resetForm();
    setSubmitting(false);
  };

  handleShowPassword = () => {
    this.setState({ passwordHidden: !this.state.passwordHidden });
  };

  render() {
    return (
      <Container>
        <Row className="show-grid">
          <Col xs>
            <Formik
              validationSchema={this.validationSchema}
              onSubmit={this.handleSubmit}
              initialValues={{
                email: "",
                password: ""
              }}
            >
              {({
                handleSubmit,
                isSubmitting,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                setFieldValue
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
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
                    <InputGroup>
                      <Form.Control
                        type={this.state.passwordHidden ? "password" : "text"}
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={
                          touched.password && errors.password ? "error" : null
                        }
                        style={{ borderRight: "none" }}
                      />
                      <InputGroup.Append>
                        {!this.state.passwordHidden ? (
                          <Button
                            variant="outline-secondary"
                            className="border border-left-0"
                            /* setFieldValue is used to set particular fields in formik */
                            onClick={() => {
                              setFieldValue("password", "");
                              this.setState({ passwordHidden: true });
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                            ></FontAwesomeIcon>
                          </Button>
                        ) : null}

                        <Button
                          variant="outline-secondary"
                          className="border border-left-0"
                          onClick={this.handleShowPassword}
                        >
                          <FontAwesomeIcon
                            icon={
                              this.state.passwordHidden ? faEyeSlash : faEye
                            }
                          ></FontAwesomeIcon>
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>

                    {touched.password && errors.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Form.Group>

                  <Button
                    variant={
                      !errors.email && !errors.password
                        ? "primary"
                        : "secondary"
                    }
                    type="submit"
                    disabled={errors.email || errors.password ? true : false}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
