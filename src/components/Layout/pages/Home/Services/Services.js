import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useServices from "../../../../../hooks/useServices";

const Services = () => {
   const [services] = useServices();
   const navigate = useNavigate();
   return (
      <div className="container my-5">
         <h3 className="text-center text-primary fw-bold">Personal Training Services</h3>
         <p className="text-center mb-4 fw-bold">Choose best service for you today</p>
         <CardGroup>
            {services.map((service) => (
               <Card className="mx-3 shadow rounded" key={service.id}>
                  <Card.Img
                     variant="top"
                     src={service.profile}
                     className="bg-image hover-zoom img-fluid"
                  />
                  <Card.Body>
                     <Card.Title>{service.title}</Card.Title>
                     <Card.Text>
                        <p>{service.message}</p>
                        <h5>Price: ${service.price}</h5>
                     </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                     <Button
                        variant="light"
                        className="fs-5 fw-bold text-primary"
                        onClick={() => navigate(`/checkout/${service.id}`)}
                     >
                        <FontAwesomeIcon icon={faCartPlus} className="pe-2" />
                        Checkout
                     </Button>
                  </Card.Footer>
               </Card>
            ))}
         </CardGroup>
      </div>
   );
};

export default Services;
