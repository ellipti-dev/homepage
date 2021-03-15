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
      padding: theme.spacing(4),
      position: 'absolute',
      margin: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  projectNameSection: {
    display: 'block',
    padding: 11,
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: 'skyblue',

      '& $projectName': {
        color: 'red',
        textDecoration: 'underline',
      },
      '& $projectCategory': {
        color: 'purple',
      }
    }
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

const ProjectItem = ({ item }) => {
  const classes = useStyles();
  const { name, image, link } = item;

  return (
    <Paper
      className={classes.root}
    >
      <div className={classes.imageSection}>
        <img src={image} alt={name} />
      </div>
      <a 
        className={classes.projectNameSection}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
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
      </a>
    </Paper>
  )
}

export default ProjectItem;