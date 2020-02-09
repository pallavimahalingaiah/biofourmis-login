import React from "react";

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
import FormErrorValidation from "./../../../../components/error";
import "./ForgotPasswordForm.css";

let passwordValidation = [];
let confirmPasswordValidation;

const ForgotPasswordForm = () => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    resetForm();
    setSubmitting(false);
  };

  const validateNewPassword = values => {
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

  return (
    <Container>
      <Row className="show-grid">
        <Col xs>
          <Formik
            validate={validateNewPassword}
            onSubmit={handleSubmit}
            initialValues={{
              password: "",
              confirmPassword: ""
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
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
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
                  {values.password.length > 0 &&
                  passwordValidation.length > 0 ? (
                    <div className="error-message">
                      <FormErrorValidation
                        passwordValidation={passwordValidation}
                      ></FormErrorValidation>
                    </div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm new password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm new password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    className={errors.confirmPassword ? "error" : null}
                  />
                  {errors.confirmPassword ? (
                    <div className="error-message">
                      {errors.confirmPassword}
                    </div>
                  ) : values.confirmPassword !== "" &&
                    values.password !== "" ? (
                    <div>password matched</div>
                  ) : null}
                </Form.Group>

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
};

export default ForgotPasswordForm;
