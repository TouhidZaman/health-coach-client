import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import NavigationItems from "../NavigationItems/NavigationItems";

const Navbar = () => {
   return (
      <nav className={classes.navbar}>
         <div className={classes.navContainer}>
            <h1 className={classes.logo}>
               <Link to="/">Fitness Master</Link>
            </h1>
            <div className={classes.navbarItemsContainer}>
               <NavigationItems />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
