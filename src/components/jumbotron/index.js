import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 128,
    paddingBottom: 64,
    background: '#000',
  },
}));

function Jumbotron({ children }) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Jumbotron;