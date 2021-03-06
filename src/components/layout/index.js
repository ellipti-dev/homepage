import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../../components/header';
import Footer from '../../components/footer';
// import SEO from '../../components/seo';
import '@fontsource/epilogue';
import '@fontsource/roboto-slab';
import "@fontsource/roboto-slab/100.css"
import "@fontsource/roboto-slab/300.css"


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 56,
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        component='main'
        className={classes.root}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;