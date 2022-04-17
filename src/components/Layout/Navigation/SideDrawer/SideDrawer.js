import React from "react";
import Logo from "../../../Logo/Logo";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = ({ show, sideDrawerClosed }) => {
   return (
      <>
         <Backdrop show={show} clicked={sideDrawerClosed} />
         <div className={`${classes.sideDrawer} ${show ? classes.open : classes.close}`}>
            <Logo size="30px" />
            <nav className={classes.navigationContainer}>
               <NavigationItems />
            </nav>
         </div>
      </>
   );
};

export default SideDrawer;
