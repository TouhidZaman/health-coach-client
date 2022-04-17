import React from 'react';
import classes from './NavigationItems.module.css'
import CustomLink from './CustomLink/CustomLink';

const NavigationItems = () => {
    const redirects = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/blogs", name: "Blogs" },
        { id: 3, path: "/about", name: "About" },
        { id: 4, path: "/login", name: "Login" },
     ];
  
     return (
        <ul className={classes.NavigationItems}>
           {redirects.map((redirect) => (
              <li className={classes.NavigationItem} key={redirect.id}>
                 <CustomLink to={redirect.path} activeStyle={classes.activeStyle}>
                    {redirect.name}
                 </CustomLink>
              </li>
           ))}
        </ul>
     );
};

export default NavigationItems;