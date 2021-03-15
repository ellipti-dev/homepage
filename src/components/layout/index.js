import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../../components/header';
import Footer from '../../components/footer';
// import SEO from '../../components/seo';
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto-slab';
import "@fontsource/roboto-slab/100.css"
import "@fontsource/roboto-slab/300.css"



function Layout({ children }) {

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