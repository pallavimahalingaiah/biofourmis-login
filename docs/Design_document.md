# Design Document 

## Application Structure:

Decided to group all related features together, and nest them as needed.

/src

    /components 
        /error
            FormErrorValidation.js
            FormErrorValidation.css
            index.js
        /layout
            /images
            Layout.js
            Layout.css
            index.js 
      
    /pages 
        /loginPage
            /component
            /images
            Index.js

    /routes
	    Index.js


## External react packages:

- react-router-dom 
    - for routing in react web applications.
- Formik 
    - helps in getting more fine grained access to the form fields for accessing data, validation, error    messages etc.
- Yup
    - schema builder for value parsing and validation.
- React-bootstrap and bootstrap 
    - frontend framework for UI components and responsiveness.
- Fontawesome
    - font and icon toolkit

## Design decisions:

- Layout.js and FormErrorValidation.js:
    - Have used functional components as these are presentational components which do not have their own state and there is no need to access life cycle hooks.

- LoginForm.js:
	- Implemented class based component, used formik and Yup for form validation and handling individual fields of the form.

- ForgotPasswordForm.js:
	- Implemented class based component, used formik and custom validation function to show multiple detailed error messages.

