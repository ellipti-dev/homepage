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
    backgroundImage: "url('/svg/public1.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 20% bottom 136px",
  },
  jumbotronTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  jumbotronDescription: {
    width: "35%",
    fontFamily: "'Roboto slab', serif",
    color: "#fff",
    fontSize: 26,
    textShadow: 'black 1px 2px 8px',
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
        </Jumbotron>

        <Main>
          <section id="presence" className={classes.section}>
            <Container maxWidth="md">
              <Typography className={classes.sectionTitle} component="h2">
                Presence
              </Typography>
              {presence.map(item => (
                <div className={classes.presenceDiv}>
                  <Typography component="h3" className={classes.presenceTitle}>
                    {item.title}
                  </Typography>

                  {item.content && item.content.map(subItem => (
                    <Typography component='p' className={classes.presenceDescription}>
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
                  <Grid item xs={6} sm={4} md={3}>
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
