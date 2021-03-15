import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";

const useStyles = makeStyles((theme) => ({
  root: {},
  jumbotron: {
    backgroundImage: "url('/svg/index1.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 20% center",
    height: "480px",
  },
  beginning_word: {
    fontSize : 12,
    fontFamily: "Roboto",
    fontWeight: 500,
    color: "#fff",
  },
  title: {
    fontSize: "40px",
    color: "#fff",
    fontFamily: '"Roboto Slab", serif',
    fontWeight: "normal",
    lineHeight: 1.3,
    width: "350px",
  },
  visionSection: {
    paddingTop: 73,
    paddingBottom: 86,
    backgroundColor: "#E4E9EB",
  },
  visionTitle: {
    fontSize: 20,
    fontFamily: '"Roboto Slab", serif',
    fontWeight: "normal",
  },
  visionDescription: {
    fontSize: 16,
    fontWeight: 300,
  },
  valueSection: {
    paddingTop: 44,
    paddingBottom: 160,

    '& $valueContainer:nth-child(2n+1)': {
      flexDirection: 'row-reverse',
    },
    '& $valueContainer:nth-child(2n) img': {
      float: 'right',
    }
  },
  valueTitle: {
    fontSize: 20,
    fontFamily: '"Roboto Slab", serif',
    fontWeight: "normal",
  },
  valueDescription: {
    fontSize: 16,
    fontWeight: 300,
  },
  valueContainer: {
    paddingTop: 81,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <Jumbotron className={classes.jumbotron}>
        <Typography className={classes.beginning_word}>
          WE ARE
        </Typography>
        <Typography className={classes.title} component={"h1"} gutterBottom>
          Building with the founders, accelerate the shift
        </Typography>
      </Jumbotron>

      <section className={classes.visionSection}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={2}>
              <Typography
                className={classes.visionTitle}
                component="h2"
                gutterBottom
              >
                Vision
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography
                className={classes.visionDescription}
                component="p"
                gutterBottom
              >
                Ecosystem builder for the blockchain companies to navigate the
                market pursuing excellence with the right strategy and
                implementations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.valueSection}>
        <Container>
          <Typography
            className={classes.valueTitle}
            component="h2"
            align={"center"}
            gutterBottom
          >
            What is <br />
            Ellipti’s value proposition?
          </Typography>

          <Grid className={classes.valueContainer} container spacing={8}>
            <Grid item xs={12} sm={6}>
              <img src="/svg/index2.svg" alt="tbd" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.valueDescription}
                align={"left"}
                gutterBottom
              >
                {
                  "From a project to the company with sustainable growth backed by generalists & specialists."
                }
              </Typography>
            </Grid>
          </Grid>

          <Grid className={classes.valueContainer} container spacing={8}>
            <Grid item xs={12} sm={6}>
              <img src="/svg/index3.svg" alt="tbd" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.valueDescription} gutterBottom>
                {
                  "Ellipti covers overall necessities in the crypto market with the expertise and various experiences"
                }
              </Typography>
            </Grid>
          </Grid>

          <Grid className={classes.valueContainer} container spacing={8}>
            <Grid item xs={12} sm={6}>
              <img src="/svg/index4.svg" alt="tbd" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.valueDescription} gutterBottom>
                {
                  "Ellipti advisory & Ellipti labs accelerate teams mainly in the Korean market, further to the other major local markets, aiming to grow the sustainable & strong ecosystem"
                }
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};

export default IndexPage;
