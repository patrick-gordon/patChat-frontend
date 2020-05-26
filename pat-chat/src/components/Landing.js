import React from "react";

import { Container, Jumbotron, Button } from "reactstrap";

export default function Landing() {
  return (
      <Container >
    <Jumbotron  style={{marginTop: '3rem',}}>
        <h1 className="display-3">Welcome To PatChat!</h1>
        <p className="lead">
          Write about anything your dreams desire!
        </p>
        <hr className="my-2" />
        <p>
         To get started click signup, if you already have an account continue to login.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}
