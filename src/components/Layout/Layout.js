import React from "react";

import classes from "./Layout.module.css";
import Navbar from "./Navigation/Navbar/Navbar";

const Layout = ({ children }) => {
   return (
      <>
         <Navbar></Navbar>
         <main className={classes.content}>{children}</main>
      </>
   );
};

export default Layout;
