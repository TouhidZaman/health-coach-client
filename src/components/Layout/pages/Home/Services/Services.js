import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useServices from "../../../../../hooks/useServices";

const Services = () => {
   const [services] = useServices();
   const navigate = useNavigate();
   return (
      <div className="container my-5">
         <h3 className="text-center mb-4">Personal Training Services</h3>
         <CardGroup>
            {services.map((service) => (
               <Card className="mx-3" key={service.id}>
                  <Card.Img variant="top" src={service.profile} className="img-fluid" />
                  <Card.Body>
                     <Card.Title>{service.title}</Card.Title>
                     <Card.Text>{service.message}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                     <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate(`/checkout/${service.id}`)}
                     >
                        Checkout
                     </button>
                  </Card.Footer>
               </Card>
            ))}
            {/* <Card>
               <Card.Img variant="top" src="holder.js/100px160" />
               <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This content is a little bit longer.
                  </Card.Text>
               </Card.Body>
               <Card.Footer>
                  <button
                     className="btn btn-primary mx-2"
                     onClick={() => navigate(`/checkout/${serviceOne}`)}
                  >
                     Service 1
                  </button>
               </Card.Footer>
            </Card>
            <Card className="mx-3">
               <Card.Img variant="top" src="holder.js/100px160" />
               <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                     This card has supporting text below as a natural lead-in to
                     additional content.{" "}
                  </Card.Text>
               </Card.Body>
               <Card.Footer>
                  <button
                     className="btn btn-primary mx-2"
                     onClick={() => navigate(`/checkout/${serviceTwo}`)}
                  >
                     Service 2
                  </button>
               </Card.Footer>
            </Card>
            <Card>
               <Card.Img variant="top" src="holder.js/100px160" />
               <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                     This is a wider card with supporting text below as a natural lead-in
                     to additional content. This card has even longer content than the
                     first to show that equal height action.
                  </Card.Text>
               </Card.Body>
               <Card.Footer>
                  <button
                     className="btn btn-primary mx-2"
                     onClick={() => navigate(`/checkout/${serviceThree}`)}
                  >
                     Service 3
                  </button>
               </Card.Footer>
            </Card> */}
         </CardGroup>
      </div>
   );
};

export default Services;
