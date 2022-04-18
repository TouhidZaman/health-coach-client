import React from "react";
import classes from "./NavigationItems.module.css";
import CustomLink from "./CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { signOut } from "firebase/auth";

const NavigationItems = () => {
   const [user] = useAuthState(auth);
   const redirects = [
      { id: 1, path: "/", name: "Home" },
      { id: 2, path: "/blogs", name: "Blogs" },
      { id: 3, path: "/about", name: "About" },
   ];

   // Handling sign-out
   const signOutHandler = () => {
      signOut(auth);
   };

   return (
      <ul className={classes.NavigationItems}>
         {redirects.map((redirect) => (
            <li className={classes.NavigationItem} key={redirect.id}>
               <CustomLink to={redirect.path} activeStyle={classes.activeStyle}>
                  {redirect.name}
               </CustomLink>
            </li>
         ))}
         {user ? (
            <li className={classes.NavigationItem}>
               <CustomLink onClick={signOutHandler} to={"/"}>
                  {user.displayName?.split(' ')[0]} (logOut)
               </CustomLink>
            </li>
         ) : (
            <li className={classes.NavigationItem}>
               <CustomLink activeStyle={classes.activeStyle} to={"/login"}>
                  Login
               </CustomLink>
            </li>
         )}
      </ul>
   );
};

export default NavigationItems;
