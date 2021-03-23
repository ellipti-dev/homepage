import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Jumbotron from "../components/jumbotron";
import Container from "@material-ui/core/Container";

import Layout from "../components/layout";
import FloatingActionButton from "../components/fab";
import Main from "../components/main";
import Award from "../components/award";

import { research } from "../data/labs";

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
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      width: '100%',
      height: '100%',
    }
  },
  jumbotronImage: {
    paddingTop: 40,

    [theme.breakpoints.up('md')]: {
      padding: 0,
      position: 'absolute',
      left: 0,
      bottom: '10%',
      width: 337,
    },
  },
  section: {
    paddingBottom: 90,

    "&:last-child": {
      paddingBottom: 0,
    },
  },
  otherSection: {
    marginTop: 60,
  },
  sectionTitle: {
    fontFamily: "'Roboto slab', serif",
    fontSize: 26,
    color: "#292929",
    position: 'relative',
    width: '100%',

    [theme.breakpoints.up('md')]: {
      textAlign: "right",
    }
  },
  sectionDescription: {
    fontSize: 14,
    lineHeight: 1.3,
    color: "#878D91",

    [theme.breakpoints.up('md')]: {
      textAlign: "right",
    }
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 4,
  },
  contentSubtitle: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 4,
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
        <Jumbotron className={classes.jumbotron} isShowArrow>
          <Grid container className={classes.jumbotronGrid}>
            <Grid item xs={12} md={6}>
              <div className={classes.jumbotronContent}>
                <Typography className={classes.jumbotronTitle} component="h1">
                  Labs
                </Typography>
                <img
                  src="/svg/labs-divider.svg"
                  alt="divider"
                />
                <Typography className={classes.jumbotronDescription} component="p">
                  Ellipti Labs is research-based fund to invest and empower
                  early-stage blockchain projects, focusing on the long-term growth.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.jumbotronImageWrapper}>
                <img className={classes.jumbotronImage} src='/svg/labs1.svg' />
              </div>
            </Grid>
          </Grid>
        </Jumbotron>

        <Main>
          <section id="research" className={classes.section}>
            <Container maxWidth="md">
              <Grid container spacing={3}>
                <Grid item container xs={12} md={3}>
                  <Typography className={classes.sectionTitle} component="h2">
                    Research
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                {/* contents */}
                <Grid item container md={3}>
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
                  {research.filter(raw => raw.type === 'notable').map((item) => (
                    <div key={item.title}>
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
                  <Award
                    icon='/svg/medium.svg'
                    title='1st Prize'
                    lead='@ HackAtom Seoul 2019'
                    description='Over-collateralized staking derivatives with a SDK Uniswap module over IBC and a fully supported UX.'
                    link='https://blog.cosmos.network/defi-hackathon-the-top-7-projects-changing-the-game-in-finance-e66cb9af1c7f'
                  />
                  <Award
                    title='1st Prize'
                    lead='@ SF DeFi Hackathon 2019'
                    description={'Liquid Staking Position (LSP) NFTs, an additional token that has governance rights & receives rewards.'}
                    icon='/svg/youtube.svg'
                    link='https://www.youtube.com/watch?v=d7zNjoSgGww'
                  />

                  <section className={classes.otherSection}>
                    {research.filter(raw => raw.type !== 'notable').map((item) => (
                      <article key={item.title}>
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
                      </article>
                    ))}
                  </section>
                </Grid>
              </Grid>
            </Container>
          </section>
        </Main>

        <FloatingActionButton
          items={[
            { label: "Research", anchor: "research" },
          ]}
        />
      </Layout>
    </>
  );
};

export default LabsPage;
