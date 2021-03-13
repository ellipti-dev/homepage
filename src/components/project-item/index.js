import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #D9D9D9',
    backgroundColor: theme.palette.background.default,
  },
  imageSection: {
    position: 'relative',
    height: '100%',
    paddingTop: '100%', // aspect ratio 1:1
    width: '100%',
    borderBottom: '1px solid #D9D9D9',

    '& img': {
      width: '100%',
      position: 'absolute',
      padding: theme.spacing(4),
      top: 0,
    },
  },
  projectNameSection: {
    padding: 11,
  },
  projectName: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 11,
  },
  projectCategory: {
    fontSize: 11,
  },
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
      <div className={classes.projectNameSection}>
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
          className={classes.projectCategory}
        >
          Tbd
        </Typography>
      </div>
    </Paper>
  )
}

export default ProjectItem;