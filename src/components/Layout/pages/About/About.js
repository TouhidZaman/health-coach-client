import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import author from "../../../../images/author.png";

const About = () => {
   return (
      <section className="container my-5 pt-5">
         <div className="col-12 col-md-4 mx-auto d-flex justify-content-center">
            <img src={author} alt="" className="img-fluid" />
         </div>
         <div className="col-12 col-md-9 mx-auto text-center ">
            <h2 className="my-2 text-primary">Muhammad Touhiduzzaman</h2>
            <p className="mt-2 mb-3 d-flex align-items-center justify-content-center">
               <FontAwesomeIcon icon={faCode} className="pe-2" />
               <small>Full stack web developer</small>
               <FontAwesomeIcon icon={faCode} className="ps-2" />
            </p>
            <p className="col-11 mx-auto">
               Hello there ! Myself Muhammad Touhiduzzaman. I'm a junior level full stack
               web developer. I'm Currently working with javascript based technologies like react ,
               firebase , express JS, MongoDB etc. Recently I
               have developed some projects based on these technologies and I'm also
               panning to develope so many web applications as much as I can do to
               develope my skills. I believe practice makes a man perfect. . Inshallah one
               day I will become a great developer. there's no stopping back for me.
            </p>
         </div>
      </section>
   );
};

export default About;
