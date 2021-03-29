import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Jumbotron from "../components/jumbotron";
import Container from "@material-ui/core/Container";

import Layout from "../components/layout";
import Main from "../components/main";
import Award from "../components/award";
import LabsItem from '../components/labs-item';

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
    marginTop: '-10px',
    paddingBottom: '10px',

    [theme.breakpoints.up('md')]: {
      position: 'relative',
      width: '100%',
      height: '100%',
      marginTop: 0,
      paddingBottom: 0,
    }
  },
  jumbotronImage: {
    width: '50%',

    [theme.breakpoints.up('md')]: {
      padding: 0,
      position: 'absolute',
      left: 0,
      bottom: '42px',
      width: 380,
    },
  },
  section: {
    paddingBottom: 90,

    "&:last-child": {
      paddingBottom: 0,
    },
  },
  labsSection: {
    marginBottom: 30,
  },
  awardSection: {
    marginBottom: 20,
  },
  ImgSection: {
    marginBottom: 0,
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
}));

// markup
const LabsPage = () => {
  const classes = useStyles();
  const {
    newsCommentaryImage1,
    newsCommentaryImage2,
  } = useStaticQuery(graphql`
    query {
      newsCommentaryImage1: file(relativePath: { eq: "labs/research1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      newsCommentaryImage2: file(relativePath: { eq: "labs/research2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <>
      <Layout>
        <Jumbotron className={classes.jumbotron} isShowArrow>
          <Grid container className={classes.jumbotronGrid}>
            <Grid item xs={12} md={5}>
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
            <Grid item xs={12} md={7}>
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
                  <section className={classes.labsSection}>
                    <LabsItem
                      title={"DeFi Report @ Coinone"}
                      content={"Under the partnership with Coinone, sourced comprehensive report as a snapshot of DeFi ecosystem's growth with insights to the Korean crypto community."}
                    />
                    <LabsItem
                      title={"News Commentary @ Crypto media"}
                      content={"Provided analysis & commentary on macro/micro issues in the blockchain market to crypto medias such as Coindesk Korea, Join:D"}
                    />
                    <LabsItem
                      title={"Everett Protocol"}
                      subTitle={"Staking Derivatives for better PoS"}
                      content={"Everett Protocol allows users to create 'shadow tokens' called bAtoms that is fully backed by their staking position to solve the problem: “What if delegators could receive staking rewards and “What if delegators could receive staking rewards and be incentivized to pool their assets into DeFi simultaneously?” Ellipti came up with the answer: bAtoms, staking positions collateralized shadow token that delegators can use to pool into DeFi protocols."}
                    />
                  </section>

                  <section className={classes.awardSection}>
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
                  </section>
                  
                  <section className={classes.ImgSection}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        <Img
                          fluid={newsCommentaryImage1.childImageSharp.fluid}
                          alt='ellipti cosmos'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Img
                          fluid={newsCommentaryImage2.childImageSharp.fluid}
                          alt='ellipti comsmos'
                        />
                      </Grid>
                    </Grid>
                  </section>

                </Grid>
              </Grid>
            </Container>
          </section>
        </Main>
      </Layout>
    </>
  );
};

export default LabsPage;
