import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../UI/Loading/Loading";

const RequireAuth = ({ children }) => {
   const [user, loading] = useAuthState(auth);
   const location = useLocation(); //Getting current location

   //waiting for the user info
   if (loading) {
      return <Loading />;
   }

   //checking user
   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }
   return children;
};

export default RequireAuth;
