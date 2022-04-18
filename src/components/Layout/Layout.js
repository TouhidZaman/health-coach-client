import React, { useState } from "react";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.css";
import Navbar from "./Navigation/Navbar/Navbar";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";

const Layout = ({ children }) => {
   //For handling side drawer open and closed
   const [show, setShow] = useState(false);
   const sideDrawerClosedHandler = () => setShow(false);
   const toggleSideDrawerHandler = () => setShow((prevShow) => !prevShow);

   return (
      <>
         <Navbar toggleSideDrawer={toggleSideDrawerHandler} />
         <SideDrawer show={show} sideDrawerClosed={sideDrawerClosedHandler} />
         <main className={classes.content}>{children}</main>
         <Footer />
      </>
   );
};

export default Layout;
