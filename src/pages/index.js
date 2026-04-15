import dynamic from "next/dynamic";
import BannerOne from "@/components/BannerOne/BannerOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import CtaAbout from "@/components/CtaAbout/CtaAbout";
import Layout from "@/components/Layout/Layout";
import PricingOne from "@/components/PricingOne/PricingOne";
import Head from "next/head";
import React from "react";
const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CPI Software Solution Ltd",
    url: "https://cpisolution.co.uk",
    telephone: "+44 7853 118793",
    email: "info@cpisolution.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "128 City Road",
      addressLocality: "London",
      postalCode: "EC1V 2NX",
      addressCountry: "GB",
    },
    areaServed: ["United Kingdom", "London"],
    knowsAbout: [
      "Magazine subscriber management software UK",
      "Insurance policy management software London",
      "Oracle Apex business software",
    ],
  };

  return (
    <Layout pageTitle="Magazine Subscriber Management UK | Insurance Policy Management Software London">
      <Head>
        <meta
          name="description"
          content="CPI Software Solution Ltd delivers magazine subscriber management software in the UK and insurance policy management software in London, with ready-to-use Oracle Apex systems from £6,500."
        />
        <meta
          name="keywords"
          content="magazine subscriber management UK, magazine subscription software London, insurance policy management software London, insurance management system UK, Oracle Apex software UK"
        />
        <meta
          property="og:title"
          content="Magazine Subscriber Management UK | CPI Software Solution Ltd"
        />
        <meta
          property="og:description"
          content="Professional software for UK magazine publishers and London insurance agencies. Ready-to-use systems with long-term support."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <BannerOne />
      <CtaAbout isScrollActive />
      <PricingOne />
      <CtaOne isScrollActive />
    </Layout>
  );
};

export default Home;
