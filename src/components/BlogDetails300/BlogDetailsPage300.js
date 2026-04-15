import blogDetailsPage300 from "@/data/blogDetailsPage300";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import BlogDetailsContent300 from "./BlogDetailsContent";
import ShareBlock from "./ShareBlock";

const { blog, tags, share, posts } = blogDetailsPage300;
const {  } = blog;

const BlogDetailsPage200 = () => {
  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={12}>
            <BlogDetailsContent300 blog={blog} />
          </Col>
          <Col lg={4}>
               </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailsPage200;
