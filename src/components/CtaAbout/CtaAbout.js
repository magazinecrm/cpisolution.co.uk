import ctaAbout from "@/data/ctaAbout";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, intro, sections } = ctaAbout;

const CtaAbout = () => {
  return (
    <section className="cta-three" id="services">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="cta-three__content">
              <div className="block-title text-left">
                <h2 className="block-title__title black-text-color">
                  <TextSplit text={title} />
                </h2>
              </div>
              <p className="cta-three__text">{intro}</p>
              {sections.map((section, i) => (
                <div key={i} className="cta-about__section">
                  <h3 className="cta-about__section-title">{section.heading}</h3>
                  {section.paragraphs?.map((text, pIndex) => (
                    <p key={pIndex} className="cta-three__text">
                      {text}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="cta-three__list">
                      {section.bullets.map((text, bIndex) => (
                        <li key={bIndex} className="cta-three__list-item">
                          {text}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.postText ? (
                    <p className="cta-three__text">{section.postText}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaAbout;
