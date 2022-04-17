import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, activeStyle, ...props }) => {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });
   return (
      <Link className={match && activeStyle} to={to} {...props}>
         {children}
      </Link>
   );
};

export default CustomLink;
