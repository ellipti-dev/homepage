import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #D9D9D9',
    height: '100%',
    backgroundColor: theme.palette.background.default,

  },
  imageSection: {
    width: '100%',
    padding: theme.spacing(4),
    borderBottom: '1px solid #D9D9D9',
    '& img': {
      width: '100%',
    },
  },
  projectName: {
    fontWeight: 500,
  }
}));

const ProjectItem = ({
  name,
  image,
}) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
    >
      <div className={classes.imageSection}>
        <img src={image} alt={name} />
      </div>
      <div>
        <Typography
          variant="body1"
          component='p'
          className={classes.projectName}
        >
          {name}
        </Typography>
          <Typography
          variant="body1"
          component='p'
          className={classes.span}
        >
          Tbd
        </Typography>
      </div>
    </Paper>
  )
}

export default ProjectItem;