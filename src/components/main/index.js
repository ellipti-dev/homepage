import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '80px',
    paddingBottom: '180px',
  },
}));


const Main = ({ children, className }) => {
  const classes = useStyles();

  return (
    <main
      id='main'
      className={clsx(classes.root, className)}
    >
      {children}
    </main>
  )
}

export default Main;