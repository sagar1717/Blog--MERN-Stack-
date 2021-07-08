

import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles= makeStyles({
    container:{
        margin:10,
        height:350,  
        borderRadius: 10,
        border: "1px solid rgba(224, 224, 224, 1)" ,
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        background:"LightGrey",
        '& > *':{
            padding: "0px 5px 5px 5px"
        }
    },
    image:{
        height:150,
        width:"100%",
        objectFit:"cover",
        borderRadius:"10px 10px 0px 0px"
    },
    text:{
        color: "grey",
        fontSize:12,
        wordBreak:"break-all",
    },
    heading:{
        fontSize:18,
        fontWeight:600,
        wordBreak:"break-all",
        textAlign:"center"
    },
    detail:{
        fontSize:14,
        wordBreak:"break-all",
    }

})

const Post = ({post}) => {
    const classes= useStyles();
    const url = post.picture || `https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80`;
    return (
        <Box className= {classes.container}>
            <img src={url} alt ="img" className={classes.image} ></img>
            <Typography className={classes.text}>Category: {post.categories}</Typography>
            <Typography className={classes.heading}>Name: {post.title}</Typography>
            <Typography>Auther: {post.username}</Typography>
            <Typography className={classes.detail}>{post.description}</Typography>
        </Box>
    )
}

export default Post
