import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import CompanyItem from "../components/company-item";
import FloatingActionButton from "../components/fab";

const useStyles = makeStyles((theme) => ({
  root: {},
  jumbotron: {
    backgroundImage: "url('/svg/about1.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 20% center",
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
    paddingBottom: 90,

    "&:nth-child(2n)": {
      textAlign: "right",

      "& $grid": {
        flexDirection: "row-reverse",
      },
    },
  },
  grid: {
    marginTop: 10,
  },
  sectionTitle: {
    fontFamily: "'Roboto slab', serif",
    fontSize: 38,
  },
  sectionDescription: {
    fontSize: 20,
  },
  itemDescription: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    color: "#4D5256",
    textAlign: "left",
    marginBottom: 20,
  },
  summitSection: {
    paddingBottom: 194,
  },
  summitTitle: {
    color: "#292929",
    fontWeight: 500,
    fontSize: 16,
  },
  divider: {
    marginBottom: 20,
  },
}));
// markup
const AboutPage = () => {
  const classes = useStyles();
  const {
    strategyImg,
    implementationOperationsImg,
    publicRelationImg,
    miceImg,
  } = useStaticQuery(graphql`
    query {
      strategyImg: file(relativePath: { eq: "about/strategy.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      implementationOperationsImg: file(
        relativePath: { eq: "about/implementation_and_operations.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      publicRelationImg: file(
        relativePath: { eq: "about/public_relation.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miceImg: file(relativePath: { eq: "about/mice.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Jumbotron className={classes.jumbotron}>
        <Typography className={classes.jumbotronTitle} component="h1">
          About
        </Typography>
        <img src="/svg/title-divider.svg" alt="divider" />
        <Typography
          className={classes.jumbotronDescription}
          component="p"
          gutterBottom
        >
          Ellipti advises on how to fully market the company’s fundamentals and
          its potential and achieve growth.
        </Typography>
      </Jumbotron>

      <section className={classes.section}>
        <Container>
          <Typography className={classes.sectionTitle} component="h2">
            Strategy
          </Typography>
          <Typography
            className={classes.sectionDescription}
            component="p"
            gutterBottom
          >
            {"Cross-border market & growth strategy formulation"}
          </Typography>
          <Grid className={classes.grid} container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Img
                fluid={strategyImg.childImageSharp.fluid}
                alt="ellipti's strategy"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                {
                  "Ellipti sets up the most effective & efficient GTM (Go-To-Market) strategy for community expansion/growth, marketing and business development."
                }
              </Typography>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                Continuous market monitoring with the insight, constant
                follow-up with the clients ensures the plan to be up-to-date and
                well-suited to the market's situation.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.section}>
        <Container>
          <Typography className={classes.sectionTitle} component="h2">
            {"Implementation & Operations"}
          </Typography>
          <Typography
            className={classes.sectionDescription}
            component="p"
            gutterBottom
          >
            Robust bridge connecting the strategy and actual execution
          </Typography>
          <Grid className={classes.grid} container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Img
                fluid={implementationOperationsImg.childImageSharp.fluid}
                alt="ellipti's Implementation and Operations"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                Based on the GTM strategy built-up, Ellipti implements the
                strategy covering community growth, marketing/PR, but also on
                actual business development.
              </Typography>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                Ellipti constantly seeks the potential synergetic opportunities
                based on not only the continuous market follow-up, but also
                sustaining the proper network pool.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.section}>
        <Container>
          <Typography className={classes.sectionTitle} component="h2">
            Public Relations
          </Typography>
          <Typography
            className={classes.sectionDescription}
            component="p"
            gutterBottom
          >
            Maximization of exposure with the long-lasting brand
          </Typography>
          <Grid className={classes.grid} container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Img
                fluid={publicRelationImg.childImageSharp.fluid}
                alt="ellipti's strategy"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                Long-lasting brand is one of the most crucial aspects of the
                companies.
              </Typography>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                Ellipti leverages its company brand backed by the network pool
                already set up in the major locations around the world, thereby
                companies can effectively set up their brand.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.section}>
        <Container>
          <Typography className={classes.sectionTitle} component="h2">
            MICE
          </Typography>
          <Typography
            className={classes.sectionDescription}
            component="p"
            gutterBottom
          >
            Getting much closer with the community
          </Typography>
          <Grid className={classes.grid} container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Img
                fluid={miceImg.childImageSharp.fluid}
                alt="ellipti's strategy"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                {
                  "Ellipti hosts the quality on-line & off-line events for the companies to establish the brand properly With experiences of hosting diverse types of events, diverse needs of the teams could be fit"
                }
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.summitSection}>
        <Container>
          <Divider className={classes.divider} />
          <Typography
            className={classes.summitTitle}
            component="h2"
            gutterBottom
          >
            Provenance Summit 2018
          </Typography>
          <Grid className={classes.grid} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                Provenance Summit aims to educate startups, enterprises and
                governments about the development cycle of blockchain technology
                and building a decentralized product.
              </Typography>
              <Typography
                className={classes.itemDescription}
                component="p"
                gutterBottom
              >
                Brought global industry leaders altogether to learn from the
                perspectives of understanding the best practices and
                methodologies when it comes to team collaboration and product
                development.
              </Typography>
            </Grid>
            <Grid container item xs={12} md={6} spacing={1}>
              <Grid item xs={2}>
                <CompanyItem />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem name="EEA" image="/summit/eea.svg" />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem
                  name="Consensys"
                  image="/summit/consensys.svg"
                />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem name="Parity" image="/summit/parity.svg" />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem name="Bitmain" image="/summit/bitmain.svg" />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem name="Monero" image="/summit/monero.svg" />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem name="Solana" image="/summit/solana.svg" />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem name="Status" image="/summit/status.svg" />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem
                  name="CryptoKitties"
                  image="/summit/cryptokitties.svg"
                />
              </Grid>
              <Grid item xs={2}>
                <CompanyItem
                  name="Blockgeeks"
                  image="/summit/blockgeeks.svg"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <FloatingActionButton
        items={[
          { label: "Strategy", anchor: "strategy" },
          {
            label: "Implementation & Operations",
            anchor: "implementation-operations",
          },
          { label: "Public relations", anchor: "public-relations" },
          { label: "MICE", anchor: "mice" },
          { label: "Contact Us", anchor: "contact-us" },
        ]}
      />
    </Layout>
  );
};

export default AboutPage;
