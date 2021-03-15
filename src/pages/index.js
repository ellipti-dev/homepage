import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Main from "../components/main";

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
  valueGridWrapper: {
    // sm보다 클때만 보이도록 수정
    [theme.breakpoints.up('sm')]: {
      backgroundImage: "url('/svg/horizontal-divider.svg')",
      backgroundRepeat: "repeat-y",
      backgroundPosition: "center center",
    }
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
    marginTop: 81,
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
        <Typography className={classes.title} component={"h1"}>
          Building with the founders, accelerate the shift
        </Typography>
      </Jumbotron>
      <section className={classes.visionSection}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={2}>
              <Typography
                className={classes.visionTitle}
                component="h2"
              >
                Vision
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography
                className={classes.visionDescription}
                component="p"
              >
                Ecosystem builder for the blockchain companies to navigate the
                market pursuing excellence with the right strategy and
                implementations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Main>
        <section className={classes.valueSection}>
          <Container maxWidth="md">
            <Typography
              className={classes.valueTitle}
              component="h2"
              align={"center"}
            >
              What is <br />
              Ellipti’s value proposition?
            </Typography>

            <div className={classes.valueGridWrapper}>
              <Grid className={classes.valueContainer} container spacing={8}>
                <Grid item xs={12} sm={6}>
                  <img src="/svg/index2.svg" alt="tbd" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    className={classes.valueDescription}
                    align={"left"}
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
                  <Typography className={classes.valueDescription}>
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
                  <Typography className={classes.valueDescription}>
                    {
                      "Ellipti advisory & Ellipti labs accelerate teams mainly in the Korean market, further to the other major local markets, aiming to grow the sustainable & strong ecosystem"
                    }
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Container>
        </section>

      </Main>
    </Layout>
  );
};

export default IndexPage;
