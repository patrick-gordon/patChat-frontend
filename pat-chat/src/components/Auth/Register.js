import React from "react";
import axios from 'axios'
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  const [newCreds, setNewCreds] = React.useState({
    email: '',
    username: "",
    password: "",
  });

  const [registerStatus, setRegisterStatus] = React.useState("");

  const handleChange = (e) => {
    setNewCreds({ ...newCreds, [e.target.name]: e.target.value });
    console.log("newCreds: ", newCreds);
  };

  function signup(e) {
    console.log(`newCreds sent to signup: `, newCreds);
    e.preventDefault();
    axios
      .post(
        "",
        newCreds
      )
      .then((res) => {
        console.log("response from signup call: ", res);
        setNewCreds({
          username: "",
          password: "",
          favChar: "",
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setRegisterStatus(`${err}`);
      });
  }
  return (
    <div>
        <Container>
            <h2>Create your account below!</h2>
            <Form>
                <FormGroup>
                    <Label for='email'></Label>
                    <Input
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={newCreds.email}
                    />
                    <Label for='username'></Label>
                    <Input
                    type='username'
                    placeholder='Username'
                    onChange={handleChange}
                    value={newCreds.username}
                    />
                    <Label for='password'></Label>
                    <Input
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                    value={newCreds.password}
                    />
                </FormGroup>
            </Form>
            <Button onClick={signup}>Register</Button>
        </Container>
    </div>
  );
}
