import React from "react";
import Banner from "./Banner/Banner";
import classes from "./Home.module.css";
import Services from "./Services/Services";

const Home = () => {

   return (
      <div className={classes.home}>
         <Banner />
         <Services />
      </div>
   );
};

export default Home;
