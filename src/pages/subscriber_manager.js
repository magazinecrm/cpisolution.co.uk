import BlogDetailsPage100 from "@/components/BlogDetails100/BlogDetailsPage100";
import CtaOne from "@/components/CtaOne/CtaOne";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Layout from "@/components/Layout/Layout";
import React from "react";
import TestimonialsOne from "@/components/TestimonialsOne/TestimonialsOne";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Subscription Manager">
      <InnerBanner title="Software product Details" />
    <TestimonialsOne /> 

      <BlogDetailsPage100 />

    </Layout>
  );
};

export default BlogDetails;
