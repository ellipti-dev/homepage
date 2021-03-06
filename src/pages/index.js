import * as React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Layout from '../components/layout';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 56,
  },
  lead: {
    fontSize: '1.5rem',
  },
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
  },
  logo: {
    width: 250,
  },
}));

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <section className={classes.section}>
        <img
          className={classes.logo}
          src='/logo/ellipti_white.svg'
          alt="ellipti"
        />
        <Typography variant="body1" component="p" className={classes.lead} gutterBottom>
          Building with the founders, accelerate the shift
        </Typography>
      </section>

      <Divider />

      <section className={classes.section}>
        <Typography variant="h2" component="h2" gutterBottom>
          Vision
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Ecosystem builder for the blockchain companies to navigate the market pursuing excellence with the right strategy and implementations.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h2" component="h2" gutterBottom>
          Value proposition
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {"From a project to the company with sustainable growth backed by generalists & specialists."}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {"Ellipti covers overall necessities in the crypto market with the expertise and various experiences: Ellipti advisory & Ellipti labs accelerate teams mainly in the Korean market, further to the other major local markets, aiming to grow the sustainable & strong ecosystem"}
        </Typography>
      </section>
    </Layout>
  )
}

export default IndexPage
