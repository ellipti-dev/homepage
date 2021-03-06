import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4),
    position: 'relative',
    height: '100%',
    backgroundColor: theme.palette.background.default,

    '& img': {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
    '&:hover $span': {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: theme.spacing(1),
      left: 0,
      width: '100%',
      color: theme.palette.secondary.main,
      fontSize: '1rem',
      fontFamily: '"epilogue", sans-serif',
      fontWeight: 300,
    }
  },
  span: {
    display: 'none',
  }
}));

const ProjectItem = ({
  name,
  image,
}) => {
  const classes = useStyles();
  const [isFocus, setFocus] = useState(false);
  const handleMouseEnter = () => {
    setFocus(true);
  }
  const handleMouseLeave = () => {
    setFocus(false);
  }
  return (
    <Paper
      className={classes.root}
      elevation={isFocus ? 7 : 0 }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} />
      <Typography
        variant="body1"
        className={classes.span}
      >
        {name}
      </Typography>
    </Paper>
  )
}

export default ProjectItem;