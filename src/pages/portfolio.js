import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import ProjectItem from "../components/project-item";
import FloatingActionButton from "../components/fab";
import Main from "../components/main";

import {
  Defi,
  Data,
  Application,
  Infrastructure,
  Privacy,
  Layer1,
  Analytics,
} from "../data/portfolio";

const useStyles = makeStyles((theme) => ({
  root: {},
    jumbotron: {
    backgroundImage: "url('/svg/portfolio1.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 20% bottom 50px",
  },
  jumbotronTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  jumbotronDescription: {
    width: "45%",
    fontFamily: "'Roboto slab', serif",
    color: "#fff",
    fontSize: 26,
  },
  section: {
    paddingBottom: 90,

    "&:last-child": {
      paddingBottom: 0,
    },
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 500, 
    fontFamily: "'Roboto slab', serif",
    marginBottom: 20,
  }
}));

// markup
const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Jumbotron className={classes.jumbotron} isShowArrow>
        <Typography
          className={classes.jumbotronTitle}
          component="h1"
        >
          Portfolio
        </Typography>
        <img src="/svg/title-divider.svg" alt="divider" />
        <Typography
          className={classes.jumbotronDescription}
          component="p"
        >
          {
            "Building the solid & sustainable decentralized ecosystem, with the right teams."
          }
        </Typography>
      </Jumbotron>

      <Main>
        <section id="defi" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              DeFi
            </Typography>

            <Grid container spacing={2} alignItems="stretch">
              {Defi.map((item) => (
                <Grid key={item.name} item xs={6} sm={4} md={3} lg={2}>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="data-storage-ai" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Data / Storage / AI
            </Typography>

            <Grid container spacing={2}>
              {Data.map((item) => (
                <Grid key={item.name} item xs={6} sm={4} md={3} lg={2}>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="application" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Application
            </Typography>

            <Grid container spacing={2}>
              {Application.map((item) => (
                <Grid key={item.name} item xs={6} sm={4} md={3} lg={2}>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="infrastructure" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Infrastructure
            </Typography>

            <Grid container spacing={2}>
              {Infrastructure.map((item) => (
                <Grid key={item.name} item xs={6} sm={4} md={3} lg={2}>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="privacy" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Privacy
            </Typography>

            <Grid container spacing={2}>
              {Privacy.map((item) => (
                <Grid key={item.name} item xs={6} sm={4} md={3} lg={2}>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="layer1" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Layer1
            </Typography>

            <Grid container spacing={2}>
              {Layer1.map((item) => (
                <Grid key={item.name} item xs={6} sm={4} md={3} lg={2}>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>
        <section id="analytics" className={classes.section}>
          <Container maxWidth="md">
            <Typography className={classes.sectionTitle} component="h2">
              Analytics
            </Typography>

            <Grid container spacing={2}>
              {Analytics.map((item) => (
                <Grid key={item.name} item xs={6} sm={4} md={3} lg={2}>
                  <ProjectItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>
      </Main>
      
      <FloatingActionButton
        items={[
          { label: "DeFi", anchor: "defi" },
          { label: "Data / Storage / AI", anchor: "data-storage-ai" },
          { label: "Application", anchor: "application" },
          { label: "Infrastructure", anchor: "infrastructure" },
          { label: "Privacy", anchor: "privacy" },
          { label: "Layer1", anchor: "layer1" },
          { label: "Analytics", anchor: "analytics" },
        ]}
      />
    </Layout>
  );
};

export default IndexPage;
