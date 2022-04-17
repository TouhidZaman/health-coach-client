import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = ({ size }) => {
   return (
      <h1 className={classes.logo} style={{ fontSize: size }}>
         <Link to="/">
            <FontAwesomeIcon icon={faDumbbell} />
            <span>Health Coach</span>
         </Link>
      </h1>
   );
};

export default Logo;
