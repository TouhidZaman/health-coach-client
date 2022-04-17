import React from "react";
import classes from "./Navbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../../Logo/Logo";

const Navbar = ({ toggleSideDrawer }) => {
   return (
      <div className={classes.navbarContainer}>
         <div className={classes.navbar}>
            <DrawerToggle toggleSideDrawer={toggleSideDrawer} />
            <Logo size="30px" />
            <nav className={classes.navigationContainer}>
               <NavigationItems />
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
