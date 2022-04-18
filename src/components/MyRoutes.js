import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Layout/pages/About/About";
import Login from "./Layout/pages/Auth/Login/Login";
import ResetPassword from "./Layout/pages/Auth/ResetPassword/ResetPassword";
import SignUp from "./Layout/pages/Auth/SignUp/SignUp";
import Blogs from "./Layout/pages/Blogs/Blogs";
import Checkout from "./Layout/pages/Checkout/Checkout";
import Home from "./Layout/pages/Home/Home";
import NotFound from "./Layout/pages/NotFound/NotFound";
import RequireAuth from "./Layout/RequireAuth/RequireAuth";

const MyRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} />
         <Route path="/sign-up" element={<SignUp />} />
         <Route
            path="/checkout/:serviceId"
            element={
               <RequireAuth>
                  <Checkout />
               </RequireAuth>
            }
         />
         <Route path="/reset-password" element={<ResetPassword />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default MyRoutes;
