import blogDetailsPage200 from "@/data/blogDetailsPage200";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import BlogDetailsContent200 from "./BlogDetailsContent";
import ShareBlock from "./ShareBlock";

const { blog, tags, share, posts } = blogDetailsPage200;
const {  } = blog;

const BlogDetailsPage200 = () => {
  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={12}>
            <BlogDetailsContent200 blog={blog} />
          </Col>
          <Col lg={4}>
               </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailsPage200;
