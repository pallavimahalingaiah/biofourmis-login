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

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required")
    /*  password: Yup.string()
      .min(8, "*Password must have at least 8 characters")
      .max(100, "*Password can't be longer than 100 characters")
      .required("*Password is required") */
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
              errors
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
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={
                      touched.password && errors.password ? "error" : null
                    }
                  />
                  {touched.password && errors.password ? (
                    <div className="error-message">{errors.password}</div>
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

export default LoginForm;
