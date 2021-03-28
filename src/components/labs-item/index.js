import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {},
  contentTitle: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 4,
  },
  contentSubtitle: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 4,
  },
  contentDescription: {
    fontSize: 16,
    color: "#4D5256",
    marginBottom: 30,
  },
}));


const LabsItem = ({
  title,
  subTitle,
  content,
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.contentTitle}
        component="h3"
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography
          className={classes.contentSubtitle}
          component="h4"
        >
          {subTitle}
        </Typography>
      )}
      <Typography
        className={classes.contentDescription}
        component="p"
      >
        {content}
      </Typography>
    </>
  )
}

export default LabsItem;