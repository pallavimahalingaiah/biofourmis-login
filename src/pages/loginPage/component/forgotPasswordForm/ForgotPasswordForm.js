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

const ForgotPasswordForm = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "*Password must have at least 8 characters")
      .max(100, "*Password can't be longer than 100 characters")
      .required("*Password is required")
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("values", values);
    resetForm();
    setSubmitting(false);
  };
  return (
    <Container>
      <Row className="show-grid">
        <Col xs>
          <Formik
            validationSchema={validationSchema}
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
                    className={errors.password ? "error" : null}
                  />
                  {errors.password ? (
                    <div className="error-message">{errors.password}</div>
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
                    className={
                      touched.confirmPassword && errors.confirmPassword
                        ? "error"
                        : null
                    }
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="error-message">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </Form.Group>

                <Button
                  variant={
                    !errors.email && !errors.password ? "primary" : "secondary"
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
};

export default ForgotPasswordForm;
