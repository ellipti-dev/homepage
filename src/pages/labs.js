import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Jumbotron from "../components/jumbotron";
import Container from "@material-ui/core/Container";

import Layout from "../components/layout";
import FloatingActionButton from "../components/fab";

import { research, investment } from "../data/labs";

const useStyles = makeStyles((theme) => ({
  root: {},
  jumbotron: {
    backgroundImage: "url('/svg/labs1.svg')",
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
    paddingTop: 90,
    paddingBottom: 180,
  },
  sectionIcon: {
    margin: "0 12px",
  },
  sectionTitle: {
    fontFamily: "'Roboto slab', serif",
    fontSize: 38,
    color: "#292929",
  },
  sectionDescription: {
    textAlign: "right",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 4,
  },
  contentSubtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  contentDescription: {
    fontSize: 16,
    color: "#4D5256",
    marginBottom: 30,
  },
}));

// markup
const LabsPage = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Jumbotron className={classes.jumbotron}>
          <Typography className={classes.jumbotronTitle} component="h1">
            Labs
          </Typography>
          <img src="/svg/title-divider.svg" />
          <Typography className={classes.jumbotronDescription} component="p">
            Ellipti Labs is research-based fund to invest and empower
            early-stage blockchain projects, focusing on the long-term growth.
          </Typography>
        </Jumbotron>

        <section id="research" className={classes.section}>
          <Container>
            <Grid container spacing={3}>
              <Grid item container md={3} justify="flex-end">
                <Typography className={classes.sectionTitle} component="h2">
                  <img className={classes.sectionIcon} src="/svg/labs2.svg" />
                  Research
                </Typography>
              </Grid>
              <Grid item md={9} />
              {/* contents */}
              <Grid item container md={3} justify="flex-end">
                <Typography
                  className={classes.sectionDescription}
                  component="p"
                >
                  {
                    "With the comprehensive research based on technical & business perspectives, excavating the winning projects"
                  }
                </Typography>
              </Grid>
              <Grid item md={9}>
                {research.map((item) => (
                  <div>
                    <Typography className={classes.contentTitle} component="h3">
                      {item.title}
                    </Typography>
                    {item.subTitle && (
                      <Typography
                        className={classes.contentSubtitle}
                        component="h4"
                      >
                        {item.subTitle}
                      </Typography>
                    )}
                    <Typography
                      className={classes.contentDescription}
                      component="p"
                    >
                      {item.content}
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Container>
        </section>

        <section id="investment" className={classes.section}>
          <Container>
            <Grid container spacing={3}>
              <Grid item container md={3} justify="flex-end">
                <Typography className={classes.sectionTitle} component="h2">
                  <img className={classes.sectionIcon} src="/svg/labs3.svg" />
                  Investment
                </Typography>
              </Grid>
              <Grid item md={9} />
              {/* contents */}
              <Grid item container md={3} justify="flex-end">
                <Typography
                  className={classes.sectionDescription}
                  component="p"
                >
                  Choose and support the right projects, bringing ideas into
                  reality
                </Typography>
              </Grid>
              <Grid item md={9}>
                {investment.map((item) => (
                  <div>
                    <Typography className={classes.contentTitle} component="h3">
                      {item.title}
                    </Typography>
                    {item.subTitle && (
                      <Typography
                        className={classes.contentSubtitle}
                        component="h4"
                      >
                        {item.subTitle}
                      </Typography>
                    )}
                    <Typography
                      className={classes.contentDescription}
                      component="p"
                    >
                      {item.content}
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Container>
        </section>

        <FloatingActionButton
          items={[
            { label: "Research", anchor: "research" },
            { label: "Investment", anchor: "investment" },
          ]}
        />
      </Layout>
    </>
  );
};

export default LabsPage;
