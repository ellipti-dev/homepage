import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    position: 'relative',
    height: '100%',
    backgroundColor: '#000',

    '& img': {
      width: '100%',
    },
  },
  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    color: theme.palette.secondary.main,
    fontSize: '0.85rem',
    fontFamily: '"Fraunces", "Helvetica", "Arial", serif',
  },
  // blank
  blankWrapper: {
    padding: 2,

  },
  blankRect: {
    border: '3px dotted black',

    // aspect ratio 1:1
    width: "100%",
    paddingTop: "100%",
    position: "relative",
  }
}));

const CompanyItem = ({
  name,
  image,
}) => {
  const classes = useStyles();
  if (name) {
  return (
      <Paper className={classes.root}>
        <img src={image} alt={name} />
      </Paper>
    )
  }

  return (
    <div className={classes.blankWrapper}>
      <div className={classes.blankRect} />
    </div>
  )
}

export default CompanyItem;