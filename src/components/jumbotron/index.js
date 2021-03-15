import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 128,
    paddingBottom: 64,
    background: '#000',
    height: 480,
  },
}));

function Jumbotron({ children, className }) {
  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Jumbotron;