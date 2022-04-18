import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner/Banner";
import classes from "./Home.module.css";

const Home = () => {
   const navigate = useNavigate();
   const serviceOne = 1;
   const serviceTwo = 2;
   const serviceThree = 3;

   return (
      <div className={classes.home}>
         <Banner />
         <h3>This is Home page</h3>
         <button
            className="btn btn-primary mx-2"
            onClick={() => navigate(`/checkout/${serviceOne}`)}
         >
            Service 1
         </button>
         <button
            className="btn btn-primary mx-2"
            onClick={() => navigate(`/checkout/${serviceTwo}`)}
         >
            Service 2
         </button>
         <button
            className="btn btn-primary mx-2"
            onClick={() => navigate(`/checkout/${serviceThree}`)}
         >
            Service 3
         </button>
      </div>
   );
};

export default Home;
