import bannerOne from "@/data/bannerOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import { useState } from "react";

const { images, tagline, title } = bannerOne;

const BannerOnez = () => {

 
  
    
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const body = {firstName};
        await fetch("/api/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      console.log('bbebebeebe');
    
      alert('aaaa')
     
      } catch (error) {
        console.error(error);
      }
    };











  const ref = useActive("#home");

  return (
    <section ref={ref} className="banner-one" id="home">
     
     
      <Container>
      
      </Container>
    </section>
  );
};

export default BannerOnez;
