import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialAuth from "../SocialAuth/SocialAuth";
// import classes from "./SignUp.module.css";

const SignUp = () => {
   const nameRef = useRef("");
   const emailRef = useRef("");
   const passwordRef = useRef("");
   const [validated, setValidated] = useState(false);

   const handleUserSignUp = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
         event.stopPropagation();
      } else {
         console.log("name: ", nameRef.current.value);
         console.log("email: ", emailRef.current.value);
         console.log("password: ", passwordRef.current.value);
      }
      setValidated(true);
   };
   return (
      <section id="sign-up" className={`container py-3 py-md-4 px-md-5`}>
         <div className="shadow rounded p-4 px-md-5 col-12 col-md-8 col-lg-6 mx-auto">
            <h2 className="mb-4 text-center text-primary">Sign Up Form</h2>
            <SocialAuth />
            <div className="manual-login">
               <h5 className="ps-2 mb-4 text-secondary">Sign-Up using email and password</h5>
               <Form noValidate validated={validated} onSubmit={handleUserSignUp}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                     <Form.Control
                        ref={nameRef}
                        required
                        className="rounded-pill py-2 shadow-sm"
                        type="text"
                        placeholder="Enter your name"
                     />
                     <Form.Control.Feedback type="invalid" className="ps-2">
                        Name is required!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Control
                        ref={emailRef}
                        required
                        className="rounded-pill py-2 shadow-sm"
                        type="email"
                        placeholder="Enter your email"
                     />
                     <Form.Control.Feedback type="invalid" className="ps-2">
                        Email is required!
                     </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Control
                        ref={passwordRef}
                        required
                        className="rounded-pill py-2 shadow-sm"
                        type="password"
                        placeholder="Enter your password"
                     />
                     <Form.Control.Feedback type="invalid" className="ps-2">
                        Password is required!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                     className="mb-3 ps-2 d-flex align-items-center"
                     controlId="formBasicCheckbox"
                  >
                     <Form.Check type="checkbox" label="Accept" required/>
                     <span className="ps-2">
                        <Link
                           className="text-primary text-decoration-none"
                           to={"/terms"}
                        >
                           terms and conditions ?
                        </Link>
                     </span>
                  </Form.Group>
                  <Button
                     variant="primary"
                     className="fw-bold rounded-pill shadow-sm d-block mx-auto w-50"
                     type="submit"
                  >
                     Sign Up
                  </Button>
               </Form>
               <p className="text-center py-3">
                  Already have an account ?
                  <Link
                     className="text-primary ps-2 text-decoration-none"
                     to={"/login"}
                  >
                     please login
                  </Link>
               </p>
            </div>
         </div>
      </section>
   );
};

export default SignUp;
