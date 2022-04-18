import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <section id="not-found" className="py-5 text-center">
         <div className="container py-md-3">
            <h2 className="fs-1">404</h2>
            <h3 className="mb-4"> Oops! Page Not Found </h3>
            <p className="mb-4">
               The page you are looking fo is not found! please go back to
               home page
            </p>
            <Link to={"/"} className="shadow btn btn-primary me-2 rounded-lg px-3">
               Home page
            </Link>
            <Link to={"/about"} className="shadow btn btn-primary ms-2 rounded-lg px-3">
               Contact Us
            </Link>
         </div>
      </section>
   );
};

export default NotFound;
