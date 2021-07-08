import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        backgroundColor: "black",
    },

    container:{
        justifyContent: "center",
    },
    padder:{
        padding:20
    },
    Link:{
        textDecoration:"None",
        color:"white",
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.component}>
                <Toolbar className={classes.container}>
                    <Link className={classes.Link} to="/"><Typography className={classes.padder}>HOME</Typography></Link>
                    <Link className={classes.Link} to="/about"><Typography className={classes.padder}>ABOUT</Typography></Link>
                    <Link className={classes.Link} to="/contact"><Typography className={classes.padder}>CONTACT</Typography></Link>
                    <Link className={classes.Link} to="/login"><Typography className={classes.padder}>LOGIN</Typography></Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
