import bannerOne from "@/data/bannerOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { images, tagline, title, text, pricing, primaryButton, secondaryButton } =
  bannerOne;

const BannerOne = () => {
  const ref = useActive("#home");

  return (
    <section ref={ref} className="banner-one" id="home">
      {Array.from(Array(6)).map((_, i) => (
        <span key={i} className={`banner-one__shape-${i + 1}`}></span>
      ))}
      {images.map(({ id, image, className }) => (
        <Image
          key={id}
          src={require(`src/assets/images/${image}`).default.src}
          className={className}
          alt="Awesome Image"
        />
      ))}
      <Container>
        <Row>
          <Col xl={6}>
            <div className="banner-one__content">
              <p className="banner-one__tag-line">
                {tagline} <a href="#"></a>
              </p>
              <h3 className="banner-one__title">
                <TextSplit text={title} />
              </h3>
              <p className="banner-one__tag-line">{text}</p>
              <p className="banner-one__tag-line">{pricing}</p>
              <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                <a href={primaryButton.href} className="thm-btn">
                  {primaryButton.label}
                </a>
                <a href={secondaryButton.href} className="thm-btn">
                  {secondaryButton.label}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;
