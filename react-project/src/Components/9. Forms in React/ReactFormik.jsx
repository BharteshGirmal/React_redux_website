import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")

    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});


export default function ReactFormik() {
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title bg-secondary p-2 text-light fw-bold text-center">
            Sign Up
          </h4>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={SignupSchema}
          >
            {() => (
              <Form>
                <div className="mb-3 mt-2">
                  <label htmlFor="username" className="form-label text-start">
                    Username
                  </label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-start">
                    Email
                  </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-start">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
