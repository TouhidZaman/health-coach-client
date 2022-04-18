import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../../firebase.init";
import SocialAuth from "../SocialAuth/SocialAuth";
// import classes from "./Login.module.css";

const Login = () => {
   const emailRef = useRef("");
   const passwordRef = useRef("");
   const [validated, setValidated] = useState(false);

   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

   //handling navigation
   const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || "/";
   
   useEffect(()=>{
      if (user) {
         console.log(user);
         // navigate("/");
         navigate(from, { replace: true });
      }
      
   },[user, navigate, from])

   const handleUserLogin = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
         event.stopPropagation();
      } else {
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         signInWithEmailAndPassword(email, password)
      }
      setValidated(true);
   };
   return (
      <section id="login" className={`container py-3 py-md-4 px-md-5`}>
         <div className="shadow rounded p-4 px-md-5 col-12 col-md-8 col-lg-6 mx-auto">
            <h2 className="mb-4 text-center text-primary">Login Form</h2>
            <SocialAuth />
            <div className="manual-login">
               <h5 className="ps-2 mb-4 text-secondary">Login using email and password</h5>
               <Form noValidate validated={validated} onSubmit={handleUserLogin}>
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
                  <p className="ps-2">{loading && "Please wait..."}</p>
                  <p className="text-danger ps-2">{error?.code}</p>
                  <Form.Group
                     className="mb-3 ps-2 d-flex align-items-center"
                     controlId="formBasicCheckbox"
                  >
                     <Form.Check type="checkbox" label="Remember me" />
                     <span className="ps-2">
                        |
                        <Link
                           className="text-primary ps-2 text-decoration-none"
                           to={"/reset-password"}
                        >
                           Forget password ?
                        </Link>
                     </span>
                  </Form.Group>
                  <Button
                     variant="primary"
                     className="fw-bold rounded-pill shadow-sm d-block mx-auto w-50"
                     type="submit"
                  >
                     Login
                  </Button>
               </Form>
               <p className="text-center py-3">
                  New to health coach ?
                  <Link
                     className="text-primary ps-2 text-decoration-none"
                     to={"/sign-up"}
                  >
                     Create an account
                  </Link>
               </p>
            </div>
         </div>
      </section>
   );
};

export default Login;
