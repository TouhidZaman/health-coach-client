import React from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
   return (
      <div className={classes.notFound}>
         <h3>Ops ! the page you are looking for is not found</h3>
      </div>
   );
};

export default NotFound;
