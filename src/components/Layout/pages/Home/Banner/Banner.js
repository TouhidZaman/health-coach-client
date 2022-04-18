import React from "react";
import "./Banner.css";
import banner3 from "../../../../../images/banner/banner-1.jpg";
import banner2 from "../../../../../images/banner/banner-2.jpg";
import banner1 from "../../../../../images/banner/banner-3.jpg";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <div className="banner">
         <Carousel fade>
            <Carousel.Item>
               <img className="d-block w-100" src={banner1} alt="First slide" />
               <Carousel.Caption className="carousel-caption  d-flex justify-content-center">
                  <div className="col-12 col-lg-8 mb-4">
                     <h1 className="mb-3">Wealth and Fit With Coach. Contact me today and get your best gym trainer</h1>
                     
                     <Link
                        to="/"
                        className="btn btn-light rounded-pill px-5 py-2 text-primary fw-bold"
                     >
                        Contact Me
                     </Link>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block w-100" src={banner2} alt="Second slide" />

               <Carousel.Caption className="carousel-caption   d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-8 mb-4">
                     <h1 className="mb-3">Reach Your Potential! Healthy Body Healthy Life </h1>
                     <Link
                        to="/"
                        className="btn btn-light rounded-pill px-5 py-2 text-primary fw-bold"
                     >
                        Contact Me
                     </Link>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block w-100" src={banner3} alt="Second slide" />

               <Carousel.Caption className="carousel-caption   d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-8 mb-4">
                     <h1 className="mb-3">Reach Your Potential! Healthy Body Healthy Life </h1>
                     <Link
                        to="/"
                        className="btn btn-light rounded-pill px-5 py-2 text-primary fw-bold"
                     >
                        Contact Me
                     </Link>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   );
};

export default Banner;
