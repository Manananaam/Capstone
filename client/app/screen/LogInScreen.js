import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Toast, Modal, ToastContainer } from "react-bootstrap";
import { useFormik, Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthState,
  login,
  clearAttempt,
} from "../store/slices/authSlice";

//NOTE! ADD IN CASE FOR UNDEFINED JWT OR THROWS ERROR

const LogInScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user, error } = useSelector(selectAuthState);
  const [visible, setVisible] = useState(false);

  // state related to verify student ID
  const [showToast, setShowToast] = useState(false);

  const validate = yup.object().shape({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Please enter a password that is 6 characters or more")
      .required("Password is required"),
  });

  useEffect(() => {
    if (user) {
      setShowToast(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user]);
  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error]);

  function handleCloseModal() {
    dispatch(clearAttempt());
    setVisible(false);
  }

  return (
    <>
      <ToastContainer position='top-center'>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            Welcome Back! {`${user?.firstName} ${user?.lastName}`}
          </Toast.Header>
        </Toast>
      </ToastContainer>
      <h1>Log In</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validate}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <>
              <label htmlFor='email'>Email Address</label>
              <Field name='email' type='email' />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </>
            <br />
            <>
              <label htmlFor='password'>Password</label>
              <Field name='password' type='password' />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={visible}
        onHide={handleCloseModal}
      >
        <Modal.Title> Log In Error</Modal.Title>
        <Modal.Body>
          There was an issue logging in. Please check your username and password
          and try again!
        </Modal.Body>
      </Modal>
    </>
  );
};
export default LogInScreen;
