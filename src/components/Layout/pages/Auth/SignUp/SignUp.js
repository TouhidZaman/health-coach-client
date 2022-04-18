import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../../firebase.init";
import SocialAuth from "../SocialAuth/SocialAuth";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from "../../../../UI/Loading/Loading";
// import classes from "./SignUp.module.css";

const SignUp = () => {
   const nameRef = useRef("");
   const emailRef = useRef("");
   const passwordRef = useRef("");
   const [validated, setValidated] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [agreeTerms, setAgreeTerms] = useState(false);

   //To handler signup
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth);

    //To handle updating profile
   const [
      updateProfile, 
      updating, 
      updateError
   ] = useUpdateProfile(auth);

   
   //handling navigation
   const navigate = useNavigate();
   
   useEffect(()=>{
      if (user) {
         console.log(user);
         navigate("/");
      }
      
   },[user, navigate])
   
   const handleUserSignUp = async (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      if (form.checkValidity() === false) {
         event.stopPropagation();
      } 
      else {
         const name = nameRef.current.value;
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         if (password.length < 6) {
            setErrorMessage(`Ops, password is too short`);
            return;
         }
         await createUserWithEmailAndPassword(email, password);
         await updateProfile({displayName: name});
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
                  <p className="ps-2">{(loading || updating) && "Please wait..."}</p>
                  <p className="text-danger ps-2">{errorMessage || error?.code || updateError?.code}</p>
                  <Form.Group
                     className="mb-3 ps-2 d-flex align-items-center"
                     controlId="formBasicCheckbox"
                  >
                     <Form.Check onClick={() => setAgreeTerms(prevAgreeTerms => !prevAgreeTerms) } type="checkbox" label="Accept" required/>
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
                     disabled={!agreeTerms}
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
