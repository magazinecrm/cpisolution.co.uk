import serviceOne from "@/data/serviceOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import ServiceOneSingle from "./ServiceOneSingle";

const { title, services } = serviceOne;

const ServiceOne = () => {
  const ref = useActive("#services");

  return (
    
    <section ref={ref} className="service-one" id="servicess">
 
    
    
    </section>
  );
};

export default ServiceOne;
