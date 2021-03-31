import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Jumbotron from "../components/jumbotron";
import QuoteItem from '../components/quote-item'
import Layout from "../components/layout";
import FloatingActionButton from "../components/fab";
import Main from "../components/main";
import SEO from '../components/seo';

import { featuredPresence, presence, quote } from "../data/public";

const useStyles = makeStyles((theme) => ({
  root: {},
  jumbotron: {

  },
  jumbotronGrid: {
    flexDirection: 'row',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    },
  },
  jumbotronContent: {
    textAlign: 'left',

    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },
  },
  jumbotronTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  jumbotronDescription: {
    fontFamily: "'Roboto slab', serif",
    color: "#fff",
    fontSize: 26,
    textShadow: 'black 1px 2px 8px',
  },
  jumbotronImageWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.breakpoints.up('md')]: {
      padding: 0,
      position: 'relative',
      width: '100%',
      height: '100%',
    }
  },
  jumbotronImage: {
    width: '68%',

    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
    }
  },
  section: {
    paddingBottom: 90,

    "&:last-child": {
      paddingBottom: 0,
    },
  },
  sectionTitle: {
    fontSize: 26,
    fontFamily: "'Roboto slab', serif",
    marginBottom: 30,
  },
  featuredPresenceDiv: {
    marginBottom: 16,
  },
  presenceRole: {
    color: '#292929',
    fontFamily: '"Roboto", "Roboto Slab"',
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',

    '& img': {
      width: 14,
      marginRight: 10,
    }
  },
  presenceTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  presenceDescription: {
    color: '#878D91',
    fontSize: 14,
    marginBottom: 6,
  }
}));

// markup
const PublicPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO
        title='Public'
        description='Ellipti shares insights about blockchain technology and market dynamics'
      /> 
      <Jumbotron className={classes.jumbotron} isShowArrow>
        <Grid container className={classes.jumbotronGrid}>
          <Grid item xs={12} md={4}>
            <div className={classes.jumbotronContent}>
              <Typography className={classes.jumbotronTitle} component="h1">
                Public
              </Typography>
              <img
                className={classes.sectionIcon}
                src="/svg/public-divider.svg"
                alt="divider"
              />
              <Typography className={classes.jumbotronDescription} component="p">
                Ellipti shares insights about blockchain technology and market dynamics
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.jumbotronImageWrapper}>
              <img
                className={classes.jumbotronImage}
                src='/svg/public1.svg'
                alt='public'
              />
            </div>
          </Grid>
        </Grid>
      </Jumbotron>


      <Main>
        <section id="presence" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Presence
            </Typography>
            {featuredPresence.map(item => (
              <Grid
                key={featuredPresence.keys}
                className={classes.featuredPresenceDiv}
                container
                spacing={4}
              >
                <Grid item xs={12} sm={3}>
                  <Typography component="h3" className={classes.presenceRole}>
                    <img src='/svg/presence-dot.svg' alt='dot' />
                    {item.role}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography
                    component='p'
                    className={classes.presenceTitle}
                  >
                    {item.title}
                  </Typography>
                  {item.content.map(contentItem => (
                    <Typography
                      key={contentItem}
                      component='p'
                      className={classes.presenceDescription}
                    >
                      {contentItem}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            ))}

            {presence.map(item => (
              <Grid className={classes.featuredPresenceDiv} container spacing={4} key={featuredPresence.keys}>
                <Grid item xs={12} sm={3}>
                  <Typography component="h3" className={classes.presenceRole}>
                    <img src='/svg/blank-dot.svg' alt='dot' />
                    {item.role}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  {item.content.map(contentItem => (
                    <Typography
                      key={contentItem}
                      component='p'
                      className={classes.presenceTitle}
                    >
                      {contentItem}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Container>
        </section>


        <section id="quote" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Quote
            </Typography>
            <Grid container spacing={2}>
              {quote.map((item, index) => (
                <Grid key={item.title} item xs={6} sm={4} md={3}>
                  <QuoteItem item={item} index={index} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>
      </Main>

      <FloatingActionButton
        items={[
          { label: "Presnece", anchor: "presence" },
          { label: "Quote", anchor: "quote" },
        ]}
      />
    </Layout>
  );
};

export default PublicPage;
