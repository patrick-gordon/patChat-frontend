import React from "react";
import Axios from "axios";
import Post from "./Post";
import { useHistory } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostList() {
  const history = useHistory();

  const [post, setPost] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [postStatus, setPostStatus] = React.useState("");
  const [postData, setPostData] = React.useState({
    title: "",
    content: "",
    slug: "",
    author: 1,
  });

  const handleChange = (e) => {
    console.log(postData);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    const title = postData.title;
    const content = postData.content;
    const slug = postData.slug;
    const author = postData.author;

    Axios.post(`http://127.0.0.1:8000/api/`, { title, content, slug, author })
      .then((res) => {
        console.log(res);
        setPostStatus("Success!");
        setModal(!modal);
      })
      .catch((err) => {
        console.log(err);
        setPostStatus(`${err}`);
      });
  };

  React.useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(post);
  }, []);

  return (
    <>
      <a>
        <FontAwesomeIcon icon={faPlusCircle} size="2x" onClick={toggle} />
      </a>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Post</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title"></Label>
              <Input
                type="text"
                value={postData.title}
                name="title"
                placeholder="Post Title"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="slug"></Label>
              <Input
                type="text"
                value={postData.slug}
                name="slug"
                placeholder="Post Slug"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="content">
                <Input
                  type="textarea"
                  value={postData.content}
                  name="content"
                  placeholder="Content"
                  onChange={handleChange}
                />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit} color="success">
            Create
          </Button>
          {setPostStatus}
        </ModalFooter>
      </Modal>

      {post.map((post) => {
        return (
          <Post
            id={post.id}
            title={post.title}
            content={post.content}
            slug={post.slug}
            author={post.author}
            created_on={post.created_on}
          />
        );
      })}
    </>
  );
}
