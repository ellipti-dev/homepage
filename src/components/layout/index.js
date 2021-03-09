import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../../components/header';
import Footer from '../../components/footer';
// import SEO from '../../components/seo';
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto-slab';
import "@fontsource/roboto-slab/100.css"
import "@fontsource/roboto-slab/300.css"


const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;