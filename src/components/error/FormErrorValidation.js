import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

let errorList = [
  "password should be minimum 8 chars",
  "atleast one uppercase letter[A-Z]",
  "atleast one lowercase letter[a-z]",
  "atleast one numeric character[0-9]"
];

const FormErrorValidation = props => {
  console.log("props", props);
  return (
    <div style={{ border: "2px red solid" }}>
      {errorList.map((error, index) => {
        console.log("index", index);
        return (
          <div>
            <FontAwesomeIcon
              icon={
                props.passwordValidation.includes(index) ? faEyeSlash : null
              }
            ></FontAwesomeIcon>
            <span>{error}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FormErrorValidation;
