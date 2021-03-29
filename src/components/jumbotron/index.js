import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 40,
    background: '#191919',
    minHeight: 400,

    [theme.breakpoints.up('md')]: {
      minHeight: 460,
      paddingTop: 128,
      paddingBottom: 64,
    },
  },
  bottom: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    color: '#ffffff',
  }
}));

function Jumbotron({ children, className, isShowArrow = false }) {
  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)}>
      <Container maxWidth="md">
        {children}
      </Container>
      {isShowArrow && (
        <div className={classes.bottom}>
          <a href='#main'>
            <ExpandMoreIcon className={classes.icon} />
          </a>
        </div>
      )}
    </section>
  );
}

export default Jumbotron;