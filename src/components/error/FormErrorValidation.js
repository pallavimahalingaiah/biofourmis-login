import React from "react";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

import "./FormErrorValidation.css";
import { Container, Row, Col } from "react-bootstrap";

let errorList = [
  "password should be min 8 characters",
  "at least 1 uppercase letter[A-Z]",
  "at least 1 lowercase letter[a-z]",
  "at least 1 numeric character[0-9]"
];

const FormErrorValidation = props => {
  return (
    <Container fluid style={{ padding: "0" }}>
      <Row>
        <Col lg={12}>
          <div className="form-error-validation">
            {errorList.map((error, index) => {
              return (
                <Alert key={index} className="form-error-validation-alert">
                  <FontAwesomeIcon
                    className={
                      props.passwordValidation.includes(index)
                        ? "cancelIcon"
                        : "selectedIcon"
                    }
                    icon={
                      props.passwordValidation.includes(index)
                        ? faTimesCircle
                        : faCheckCircle
                    }
                  ></FontAwesomeIcon>
                  <span className="message">{error}</span>
                </Alert>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormErrorValidation;
