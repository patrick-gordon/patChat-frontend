import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
} from "reactstrap";

export default function Post(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="6">
            <a href={`/${props.id}/`}>
              <Card style={{ marginTop: "3rem" }} body>
                <CardTitle>Title: {props.title}</CardTitle>
                <CardBody>Post: {props.content}</CardBody>
                {/* <CardText>Slug: {post.slug}</CardText> */}
                {/* <CardText>Author: {post.author}</CardText> */}
                <CardText>Created on: {props.created_on}</CardText>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
