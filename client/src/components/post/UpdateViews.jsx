import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AddCircle } from "@material-ui/icons";
import { getPost, updatePost, uploadFile } from "../Services/api";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    height: "50vh",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  },
  textField: {
    flex: 1,
    margin: "0 30px",
    fontSize: 22,
  },
  textArea: {
    width: "100%",
    marginTop: 30,
    border: "none",
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "Sagar246",
  categories: "All",
  createdDate: new Date(),
};

const UpdateView = ({ match }) => {
  const classes = useStyle();
  const history = useHistory();

  const [post, setPost] = useState({ initialValues });
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);

  const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="img" />

      <FormControl className={classes.form}>
        <label htmlFor="fileInput">
          <AddCircle fontSize="large" color="action" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <InputBase
          placeholder="Enter the Title here"
          className={classes.textField}
          value={post.title}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <Button onClick={() => updateBlog()} variant="contained">
          Update
        </Button>
      </FormControl>

      <TextareaAutosize
        rowsMin={3}
        placeholder="Tell your story"
        className={classes.textArea}
        value={post.description}
        onChange={(e) => handleChange(e)}
        name="description"
      />
    </Box>
  );
};

export default UpdateView;
