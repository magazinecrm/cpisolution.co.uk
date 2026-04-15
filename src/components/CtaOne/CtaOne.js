import ctaOne from "@/data/ctaOne";
import useActive from "@/hooks/useActive";
import React from "react";

const {
  title,
  subtitle,
  intro,
  companyName,
  companyNumber,
  registeredOffice,
  phone,
  email,
  helpTitle,
  helpItems,
  responseTime,
  paymentTitle,
  paymentText,
  accountName,
  bankName,
  paymentReference,
  paymentSupport,
} = ctaOne;

const CtaOne = ({ isScrollActive = false }) => {
  const ref = useActive("#contact", isScrollActive);

  return (
    <section ref={ref} className="cta-one" id="contact">
      <div className="container text-center">
        <div className="cta-one__content">
          <h2 className="cta-one__title light-text-color">{title}</h2>
          <p className="cta-one__subtitle light-text-color">{subtitle}</p>
          <p className="cta-one__text light-text-color">{intro}</p>
          <p className="cta-one__text light-text-color">
            <strong>{companyName}</strong>
            <br />
            <strong>Company Number:</strong> {companyNumber}
            <br />
            <strong>Registered Office:</strong> {registeredOffice}
          </p>
          <p className="cta-one__contact-line light-text-color">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="cta-one__contact-line light-text-color">
            <strong>Email:</strong> {email}
          </p>
          <h3 className="cta-one__section-title light-text-color">{helpTitle}</h3>
          <ul className="cta-one__list light-text-color">
            {helpItems.map((item, i) => (
              <li key={i} className="cta-one__list-item">
                {item}
              </li>
            ))}
          </ul>
          <p className="cta-one__text light-text-color">{responseTime}</p>
          <h3 className="cta-one__section-title light-text-color">{paymentTitle}</h3>
          <p className="cta-one__text light-text-color">{paymentText}</p>
          <p className="cta-one__text light-text-color">
            <strong>Account Name:</strong> {accountName}
            <br />
            <strong>Bank:</strong> {bankName}
          </p>
          <p className="cta-one__text light-text-color">{paymentReference}</p>
          <p className="cta-one__company light-text-color">{paymentSupport}</p>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
