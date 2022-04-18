import React from "react";
import classes from "./Blogs.module.css";
import Questions from "./Questions/Questions";

const Blogs = () => {
   return (
      <div className={classes.blogs}>
         <Questions />
      </div>
   );
};

export default Blogs;
