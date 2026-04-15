import BlogDetailsPage300 from "@/components/BlogDetails300/BlogDetailsPage300";
import CtaOne from "@/components/CtaOne/CtaOne";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Layout from "@/components/Layout/Layout";
import React from "react";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Lead manager to manage marketing">
      <InnerBanner title="lead manager to manage marketing" />
 

      <BlogDetailsPage300 />

    </Layout>
  );
};

export default BlogDetails;
