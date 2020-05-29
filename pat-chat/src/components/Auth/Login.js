import React from "react";
import axios from 'axios'
import{
    Form,
  FormGroup,
  Label,
  Input,
  Container,
  Button
} from 'reactstrap'
import { useHistory } from "react-router-dom";


export default function Login() {
  const history = useHistory();

  const [creds, setCreds] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = React.useState("");

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    console.log("creds: ", creds);
  };

  function login(e) {
    e.preventDefault();
    axios
        .post('', creds)
        .then(res => {
            console.log(`login response: `, res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userid', res.data.user.id); // this may not be called userid -- check with backend or check console for res
            setLoginStatus("Success!");
            setCreds({
                username: '',
                password: ''
            });
            history.push("/protected");
        })
        .catch(err => {
            console.log(err);
            setLoginStatus(`${err}`);
            setCreds({
                username: '',
                password: ''
            })
        });
}
  return (
    <div>
      <Container>
        <h2>Login to your account below!</h2>
        <Form>
          <FormGroup>
            <Label for="username"></Label>
            <Input
              type="username"
              placeholder="Username"
              onChange={handleChange}
              value={creds.username}
            />
            <Label for="password"></Label>
            <Input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={creds.password}
            />
          </FormGroup>
        </Form>
        <Button onClick={login}>Login</Button>
      </Container>
    </div>
  );
}
