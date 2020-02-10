import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Alert
} from "react-bootstrap";

import { Formik } from "formik";
import FormErrorValidation from "./../../../../components/error";
import "./ForgotPasswordForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faTimesCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

let passwordValidation = [];
let confirmPasswordValidation;

class ForgotPasswordForm extends Component {
  state = {
    passwordHidden: true,
    confirmPasswordHidden: true
  };

  handleSubmit = (values, { resetForm, setSubmitting }) => {
    resetForm();
    setSubmitting(false);
  };

  validateNewPassword = values => {
    /* clear the global array as this function is called onChange*/
    passwordValidation = [];

    /* password field validations */
    // length check
    if (values.password.length < 8) {
      passwordValidation.push(0);
    }
    // atleast one uppercase check
    if (!/[A-Z]/.test(values.password)) {
      passwordValidation.push(1);
    }

    // atleast one lowercase check
    if (!/[a-z]/.test(values.password)) {
      passwordValidation.push(2);
    }

    // atleast one numeric check
    if (!/[0-9]/.test(values.password)) {
      passwordValidation.push(3);
    }

    // Confirm password check
    if (values.password === values.confirmPassword) {
      confirmPasswordValidation = true;
    } else {
      confirmPasswordValidation = false;
    }
  };

  handleShowPassword = () => {
    this.setState({ passwordHidden: !this.state.passwordHidden });
  };

  handleShowConfirmPassword = () => {
    this.setState({ confirmPasswordHidden: !this.state.confirmPasswordHidden });
  };

  render() {
    return (
      <Container>
        <Row className="show-grid">
          <Col xs>
            <Formik
              validate={this.validateNewPassword}
              onSubmit={this.handleSubmit}
              initialValues={{
                password: "",
                confirmPassword: ""
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                setFieldValue
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="12" controlId="formBasicEmail">
                      <Form.Label>New Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={this.state.passwordHidden ? "password" : "text"}
                          placeholder="Enter new password"
                          name="password"
                          onChange={handleChange}
                          onKeyPress={handleBlur}
                          value={values.password}
                          className={
                            values.password.length > 0 &&
                            passwordValidation.length > 0
                              ? "error"
                              : null
                          }
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
                      {values.password.length > 0 &&
                      passwordValidation.length > 0 ? (
                        <div className="new-password-alert-message">
                          <FormErrorValidation
                            passwordValidation={passwordValidation}
                          ></FormErrorValidation>
                        </div>
                      ) : null}
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="formBasicPassword"
                      style={{ marginTop: "1.5rem " }}
                    >
                      <Form.Label>Confirm new password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={
                            this.state.confirmPasswordHidden
                              ? "password"
                              : "text"
                          }
                          name="confirmPassword"
                          placeholder="confirm new password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          className={
                            values.confirmPassword !== "" &&
                            !confirmPasswordValidation
                              ? "error"
                              : null
                          }
                        />
                        <InputGroup.Append>
                          {!this.state.confirmPasswordHidden ? (
                            <Button
                              variant="outline-secondary"
                              className="border border-left-0"
                              /* setFieldValue is used to set particular fields in formik */
                              onClick={() => {
                                setFieldValue("confirmPassword", "");
                                this.setState({ confirmPasswordHidden: true });
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
                            onClick={this.handleShowConfirmPassword}
                          >
                            <FontAwesomeIcon
                              icon={
                                this.state.confirmPasswordHidden
                                  ? faEyeSlash
                                  : faEye
                              }
                            ></FontAwesomeIcon>
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                      {values.confirmPassword !== "" &&
                      !confirmPasswordValidation ? (
                        <Alert
                          variant="danger"
                          className="forgot-password-validation-alert"
                        >
                          New password and confirm new password are not the
                          same. Please enter again
                        </Alert>
                      ) : values.confirmPassword !== "" &&
                        values.password !== "" ? (
                        <Alert className="forgot-password-validation-success-alert">
                          password matched
                          <FontAwesomeIcon
                            style={{ marginLeft: ".3rem" }}
                            icon={faCheckCircle}
                          ></FontAwesomeIcon>
                        </Alert>
                      ) : null}
                    </Form.Group>
                  </Form.Row>

                  <Button
                    variant={
                      errors.password ||
                      errors.confirmPassword ||
                      values.password === "" ||
                      values.confirmPassword === ""
                        ? "secondary"
                        : "primary"
                    }
                    type="submit"
                    disabled={
                      errors.password ||
                      errors.confirmPassword ||
                      values.password === "" ||
                      values.confirmPassword === ""
                        ? true
                        : false
                    }
                  >
                    Confirm
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

export default ForgotPasswordForm;
