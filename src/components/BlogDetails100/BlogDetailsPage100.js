import blogDetailsPage100 from "@/data/blogDetailsPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import BlogDetailsContent from "./BlogDetailsContent";
import BlogDetailsSidebar from "./BlogDetailsSidebar";
import CommentForm from "./CommentForm";
import CommentOne from "./CommentOne";
import ShareBlock from "./ShareBlock";

const { blog, tags, share, posts } = blogDetailsPage100;
const {  } = blog;

const BlogDetailsPage100 = () => {
  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={12}>
            <BlogDetailsContent blog={blog} />
            <ShareBlock tags={tags.slice(0, 1)} share={share} />
     
          
          </Col>
          <Col lg={4}>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailsPage100;
