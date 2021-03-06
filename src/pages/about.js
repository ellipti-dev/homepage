import * as React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout';
import CompanyItem from '../components/company-item';
import FloatingActionButton from '../components/fab';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  lead: {
    fontSize: '1.5rem',
  },
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
  },
  contentDiv: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  list: {
    padding: 0,
    listStyle: 'none',
  },
  outLink: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[200],
    marginBottom: theme.spacing(1),
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    '& svg': {
      marginRight: theme.spacing(1),
    }
  }
}));
// markup
const AboutPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <section className={classes.section}>
        <Typography variant="h1" component="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" component="p" className={classes.lead} gutterBottom>
          Ellipti advises on how to fully market the company’s fundamentals and its potential and achieve growth.
        </Typography>
      </section>

      <Divider />

      <section className={classes.section} id='strategy'>
        <Typography variant="h2" component="h2" gutterBottom>
          Strategy
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p" gutterBottom>
          {'Cross-border market & growth strategy formulation'}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {"Ellipti sets up the most effective & efficient GTM (Go-To-Market) strategy for community expansion/growth, marketing and business development."} 
          <br />
          {"Continuous market monitoring with the insight, constant follow-up with the clients ensures the plan to be up-to-date and well-suited to the market's situation."}
        </Typography>
      </section>

      <section className={classes.section} id='implementation-operations'>
        <Typography variant="h2" component="h2" gutterBottom>
          {'Implementation & Operations'}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p" gutterBottom>
          Robust bridge connecting the strategy and actual execution
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Based on the GTM strategy built-up, Ellipti implements the strategy covering community growth, marketing/PR, but also on actual business development. <br />
          Ellipti constantly seeks the potential synergetic opportunities based on not only the continuous market follow-up, but also sustaining the proper network pool.
        </Typography>
      </section>


      <section className={classes.section} id='public-relations'>
        <Typography variant="h2" component="h2" gutterBottom>
          {'Public relations'}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p" gutterBottom>
          Maximization of exposure with the long-lasting brand
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Long-lasting brand is one of the most crucial aspects of the companies. <br />
          Ellipti leverages its company brand backed by the network pool already set up in the major locations around the world, thereby companies can effectively set up their brand.
        </Typography>
      </section>

      <section className={classes.section} id='mice'>
        <Typography variant="h2" component="h2" gutterBottom>
          MICE
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p" gutterBottom>
          Getting much closer with the community
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {'Ellipti hosts the quality on-line & off-line events for the companies to establish the brand properly'}<br />
          {'With experiences of hosting diverse types of events, diverse needs of the teams could be fit'}
        </Typography>
        <div className={classes.contentDiv}>
          <Typography variant="h4" component="h3" gutterBottom>
            Provenance Summit 2018
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            Provenance Summit aims to educate startups, enterprises and
            governments about the development cycle of blockchain technology and
            building a decentralized product.
            <br />
            Brought global industry leaders altogether to learn from the
            perspectives of understanding the best practices and methodologies
            when it comes to team collaboration and product development.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='EEA'
                image='/portfolio/eea.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='Consensys'
                image='/portfolio/consensys.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='Parity'
                image='/portfolio/parity.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='Bitmain'
                image='/portfolio/bitmain.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='Monero'
                image='/portfolio/monero.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='Solana'
                image='/portfolio/solana.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='Status'
                image='/portfolio/status.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='CryptoKitties'
                image='/portfolio/cryptokitties.svg'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <CompanyItem
                name='Blockgeeks'
                image='/portfolio/blockgeeks.svg'
              />
            </Grid>
          </Grid>
        </div>
      </section>

      <Divider />
      <section className={classes.section} id='contact-us'>
        <Typography variant="h2" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <ul className={classes.list}>
          <li>
            <a href="mailto:info@ellipti.io" target="_blank" rel="noopener noreferrer" className={classes.outLink}>
              <MailIcon />info@ellipti.io
            </a>
          </li>
          <li>
            <a href="https://t.me/blocktoday" target="_blank" rel="noopener noreferrer" className={classes.outLink}>
              <TelegramIcon />https://t.me/blocktoday
            </a>
          </li>
          <li>
            <a href="https://twitter.com/elliptiofficial" target="_blank" rel="noopener noreferrer" className={classes.outLink}>
              <TwitterIcon />@ElliptiOfficial
            </a>
          </li>
        </ul>
      </section>
      <FloatingActionButton
        items={[
          {label: 'Strategy', anchor: 'strategy'},
          {label: 'Implementation & Operations', anchor: 'implementation-operations'},
          {label: 'Public relations', anchor: 'public-relations'},
          {label: 'MICE', anchor: 'mice'},
          {label: 'Contact Us', anchor: 'contact-us'},
        ]}
      />
    </Layout>
  )
}

export default AboutPage
