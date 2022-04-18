import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
   const emailRef = useRef("");
   const [validated, setValidated] = useState(false);
   const [emailSent, setEmailSent] = useState(false);

   const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

   const handleUserLogin = async (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
         event.stopPropagation();
      } else {
         const email = emailRef.current.value;
         if (email) {
            await sendPasswordResetEmail(email);
            toast("email sent to your email");
            setEmailSent(true);
         }
      }
      setValidated(true);
   };

   return (
      <section id="login" className={`container py-3 py-md-4 px-md-5`}>
         <div className="shadow rounded p-4 px-md-5 col-12 col-md-8 col-lg-6 mx-auto">
            <h2 className="mb-4 text-center text-primary">Password Reset Form</h2>
            <div className="password-reset">
               <h5 className="text-center mb-4 text-secondary">
                  A verification mail will be sent
               </h5>
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
                  <p className="ps-2">{sending && "Please wait..."}</p>
                  <p className="text-danger ps-2">{error?.code}</p>
                  <Form.Group
                     className="mb-3 ps-2 d-flex justify-content-center"
                     controlId="formBasicCheckbox"
                  >
                     <span className="">
                        Remember your password ?
                        <Link
                           className="text-primary ps-2 text-decoration-none"
                           to={"/login"}
                        >
                           go back to login
                        </Link>
                     </span>
                  </Form.Group>
                  <Button
                     disabled={emailSent}
                     variant="primary"
                     className="fw-bold rounded-pill shadow-sm d-block mx-auto w-50"
                     type="submit"
                  >
                     Send rest email
                  </Button>
                  <ToastContainer />
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

export default ResetPassword;
