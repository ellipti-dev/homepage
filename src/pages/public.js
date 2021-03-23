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

import { presence, quote } from "../data/public";

const useStyles = makeStyles((theme) => ({
  root: {},
  jumbotron: {

  },
  jumbotronGrid: {
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    },
  },
  jumbotronContent: {
    textAlign: 'right',
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
    paddingTop: 40,

    [theme.breakpoints.up('md')]: {
      padding: 0,
      position: 'relative',
      width: '100%',
      height: '100%',
    }
  },
  jumbotronImage: {
    width: '80%',

    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '95%',
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
  presenceDiv: {
    marginBottom: 24,  
  },
  presenceTitle: {
    fontSize: 16,
    marginBottom: 6,
  },
  presenceDescription: {
    color: '#878D91',
    fontSize: 14,
    marginBottom: 2,
  }
}));

// markup
const PublicPage = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
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
                  Ellipti shares insights about Blockchain technology and market
                  dynamics
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className={classes.jumbotronImageWrapper}>
                <img className={classes.jumbotronImage} src='/svg/public1.svg' />
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
              {presence.map(item => (
                <div key={item.title} className={classes.presenceDiv}>
                  <Typography component="h3" className={classes.presenceTitle}>
                    {item.title}
                  </Typography>

                  {item.content && item.content.map(subItem => (
                    <Typography key={subItem} component='p' className={classes.presenceDescription}>
                      {subItem}
                    </Typography>
                  ))}
                </div>
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
    </>
  );
};

export default PublicPage;
