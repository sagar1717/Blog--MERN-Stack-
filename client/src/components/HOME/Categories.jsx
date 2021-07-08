import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { categories } from "../Constants/data";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  create: {
    margin: 20,
    background: "lightblue",
    width: "86%",
    color: "black",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
    // background: "DarkGrey",
    color: "black",
  },
  link: {
    textDecoration: "None",
    color: "inherit",
  },
});

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Link className={classes.link} to="/create">
        <Button variant="contained" className={classes.create}>
          Create new Blog
        </Button>
      </Link>

      <Table className={classes.table}>
        <TableHead>
          <TableCell>
          <Link className={classes.link} to={"/"}>
            All Categories
          </Link>
          </TableCell>
        </TableHead>

        <TableBody>
          {categories.map((categories) => (
            <TableRow>
              <TableCell > 
               <Link className={classes.link} to= {`/?category=${categories}`} >
                {categories}
              </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
