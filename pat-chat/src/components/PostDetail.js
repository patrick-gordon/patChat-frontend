import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostDetail(props) {
  const history = useHistory();

  const [post, setPost] = React.useState({
    title: "",
    content: "",
    slug: "",
    author: 1,
  });

  const [model, setModel] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const postID = props.match.params.postID;

  React.useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/${postID}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggle = () => setModel(!model);

  const toggleAlert = () => setAlert(!alert);

  const handleChange = (e) => {
    console.log(post);
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  function updateSubmit() {
    console.log("clicked update", post);
    Axios.put(`http://127.0.0.1:8000/api/${postID}/`, post)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        setPost({
          title: "",
          slug: "",
          content: "",
          author: 1,
        });
      });
    setModel(!model);
    // history.push("/");
  }

  function deleteSubmit() {
    console.log("clicked delete");
    Axios.delete(`http://127.0.0.1:8000/api/${postID}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setAlert(!alert);
    history.push("/");
  }

  return (
    <div>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid black",
          marginTop: "3rem",
        }}
      >
        <Card style={{ backgroundColor: "#b7bfc8" }} body>
          <CardTitle>Title: {post.title}</CardTitle>
          <CardBody>Post: {post.content}</CardBody>
          {/* <CardText>Slug: {post.slug}</CardText> */}
          {/* <CardText>{post.author}</CardText> */}
          <CardText>Created on: {post.created_on}</CardText>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <a>
              <FontAwesomeIcon
                icon={faEdit}
                size="2x"
                onClick={toggle}
                color="#ffea00"
                style={{ marginTop: "1.5rem" }}
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faTrash}
                size="2x"
                onClick={toggleAlert}
                color="#ff0015"
                style={{ marginTop: "1.5rem" }}
              />
            </a>
          </div>

          <div className="deleteModal">
            <Modal isOpen={alert} toggle={toggleAlert}>
              <ModalHeader>
                Are you sure you want to delete this post?
              </ModalHeader>
              <ModalFooter>
                <Button color="success" onClick={deleteSubmit}>
                  Confirm
                </Button>
                <Button color="danger" onClick={toggleAlert}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>

          <div className="updateModal">
            <Modal isOpen={model} toggle={toggle} >
              <ModalHeader>Update Post</ModalHeader>
              <ModalBody>
                  Current Post: 
                <Card style={{marginTop: '1rem'}} body>
                  <CardTitle>Title: {post.title}</CardTitle>
                  <CardBody>Post: {post.content}</CardBody>
                  {/* <CardText>Slug: {this.state.post.slug}</CardText> */}
                  {/* <CardText>{this.state.post.author}</CardText> */}
                  <CardText>Created on: {post.created_on}</CardText>
                </Card>
              </ModalBody>
              {/* <h1>EDIT</h1> */}
              <ModalBody>
                <hr></hr>
                Update Post Below!
                <Form style={{marginTop: '1rem'}}>
                  <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input
                      type="text"
                      value={post.title}
                      name="title"
                      placeholder="Post Title"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="slug">Slug:</Label>
                    <Input
                      type="text"
                      value={post.slug}
                      name="slug"
                      placeholder="Post Slug"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="content">
                      {" "}
                      Content:
                      <Input
                        type="textarea"
                        value={post.content}
                        name="content"
                        placeholder="Content"
                        onChange={handleChange}
                      />
                    </Label>
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={updateSubmit}>
                  Confirm
                </Button>
                <Button color="danger" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Card>
      </Container>
    </div>
  );
}
