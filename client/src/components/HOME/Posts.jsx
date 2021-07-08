import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Link, useLocation } from "react-router-dom";

import { getAllPosts } from "../Services/api.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 89, 9, 5, 2, 5, 3];

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(search);
      // console.log(data);
      setPosts(data);
    };
    fetchData();
  }, [search]);

  return (posts.map(post => (
    <Grid item lg={3} sm={4} xs={12}>
      <Link to={`/details/${post._id}`}
       style={{ textDecoration: "none", color: "black" }}>
        <Post post={post} />
      </Link>
    </Grid>
  )));
};

export default Posts;
