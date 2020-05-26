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
          <Col >
            <a href={`/${props.id}/`}>
              <Card style={{ marginTop: "2rem", backgroundColor: '#B7BFC8', color: '#6c7595',  }} body>
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
