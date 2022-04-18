import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Checkout.module.css";

const Checkout = () => {
   const { serviceId } = useParams();
   return (
      <div className={classes.checkout}>
         <h3>This is check out page</h3>
         <h1>serviceId: {serviceId}</h1>
      </div>
   );
};

export default Checkout;
