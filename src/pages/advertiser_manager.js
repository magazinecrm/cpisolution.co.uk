import BlogDetailsPage200 from "@/components/BlogDetails200/BlogDetailsPage200";
import CtaOne from "@/components/CtaOne/CtaOne";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Layout from "@/components/Layout/Layout";
import React from "react";
import TestimonialsOne from "@/components/TestimonialsOne/TestimonialsOne";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Managing advertiser using adman">
      <InnerBanner title="Adman advertiser management software" />
 

      <BlogDetailsPage200 />

    </Layout>
  );
};

export default BlogDetails;
