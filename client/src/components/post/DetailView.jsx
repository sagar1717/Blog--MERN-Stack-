import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { getPost, deletePost } from "../Services/api.js";

const useStyle = makeStyles((theme)=>({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
        padding:0,
    }
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    height: "50vh",
  },
  icons: {
    float: "right",
    width: "22%",
  },
  icon: {
    margin: 5,
    border: "1px solid rgba(224,224,224,1)",
    padding: 5,
    borderRadius: 17,
    backgroundColor: "Lightgrey",
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  subheading: {
    // color: "rgba(200,200,200,0.9)",
    color: "grey",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("md")]:{
        display: "block",
        margin: "0px 50px 20px 15px"
    }
  },
  link:{
    textDecoration:"None",
    color:"inherit"
  }
}));

const DetailView = ({match}) => {
  const classes = useStyle();
  const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
  const history = useHistory();


  const [post, setPost] = useState({});

  useEffect(()=>{
    const fetchData = async() =>{
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    }
    fetchData();
  }, [match.params.id])


  const deleteBlog = async() =>{
    await deletePost(post._id);
    history.push("/")
  }

  return (
    <Box className={classes.container}>

      <img
        className={classes.image}
        src={post.picture || url}
        alt="banner"
      />
      
      <Box className={classes.icons}>
        <Link to= {`/update/${post._id}`} ><Edit className={classes.icon} color="primary" /></Link>
        <Delete onClick={()=> deleteBlog()} className={classes.icon} color="error" />
      </Box>
      
      <Typography className={classes.heading}>{post.title}</Typography>
      
      <Box className={classes.subheading}>
        
        <Link className={classes.link} to={`/?username=${post.username}`}>
        <Typography>
          Auther: <span style={{ fontWeight: 600 }}> {post.username}</span></Typography>
        </Link>

        <Typography style={{ marginLeft: "Auto" }}>{new Date(post.createdDate).toDateString()}</Typography>
      </Box>
      
      <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DetailView;
