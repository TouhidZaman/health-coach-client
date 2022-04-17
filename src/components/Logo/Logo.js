import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = ({ size }) => {
   return (
      <h1 className={classes.logo} style={{ fontSize: size }}>
         <Link to="/">Health Coach</Link>
      </h1>
   );
};

export default Logo;
