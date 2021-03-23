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
    // breakpint.up은 누적되어서 적용됨 md.up라면 xs.up, sm.up에 있는 것들도 같이 적용되고
    // 같은 값이라면 해당 크기에 정의된 것이 우선순위에 있음
    // 미디어 쿼리랑 완전 동일하게 작동함
    [theme.breakpoints.up('xs')]: {
      // > 0px
    },
    [theme.breakpoints.up('sm')]: {
      // > 600px
    },
    [theme.breakpoints.up('md')]: {
      // > 960px
    },
    [theme.breakpoints.up('lg')]: {
      // > 1280px
    },
    [theme.breakpoints.up('xl')]: {
      //  > 1920px
    },
  },
  jumbotronImageWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'inherit',
    marginTop: '-60px',

    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginTop: 0,
      position: 'relative',
      width: '100%',
      height: '100%',
    }
  },
  jumbotronImage: {
    // 모바일
    width: '50%',

    [theme.breakpoints.up('sm')]: {
      width: '260px',
    },
    
    [theme.breakpoints.up('md')]: {
      // pc
      position: 'absolute',
      right: '-100px',
      bottom: '-20px',
      width: 400,
    },
  },
  beginning_word: {
    marginTop: 20,

    fontSize : 14,
    fontFamily: "Roboto",
    fontWeight: 500,
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontFamily: '"Roboto Slab", serif',
    fontWeight: 400,
    lineHeight: 1,
    maxWidth: "1000px",
    fontSize: 36,
    textShadow: 'black 1px 2px 8px',

    [theme.breakpoints.up('md')]: {
      fontSize: "56px",
    },
    "&:hover": {
      textDecoration: 'underline',
    },
  },
  valueGridWrapper: {
    // sm보다 클때만 보이도록 수정
    [theme.breakpoints.up('md')]: {
      backgroundImage: "url('/svg/horizontal-divider.svg')",
      backgroundRepeat: "repeat-y",
      backgroundPosition: "center center",
    }
  },
  visionSection: {
    padding: '60px 0',
    backgroundColor: "#E4E9EB",
    backgroundImage: "url('/svg/vision-bg.svg')",

    [theme.breakpoints.up('md')]: {
      padding: '80px 0',
    },
  },
  vision_width: {
    maxWidth: '860px',
  },
  visionTitle: {
    fontSize: 20,
    fontFamily: '"Roboto Slab", serif',
    fontWeight: 500,
    textAlign: "center",
    paddingBottom: 12,

    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
    },
  },
  visionDescription: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4D5256',
  },

  valueSection: {
    '& $valueContainer:nth-child(2n+1)': {
    },
    '& $valueContainer:nth-child(2n) img': {
    }
  },
  valueTitle: {
    fontSize: 20,
    fontFamily: '"Roboto Slab", serif',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  valueDescription: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.4,
    color: '#4D5256',
  },
  valueContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueimg: {
    display: 'flex',
    justifyContent: 'center',
    height: 180,
  },
}));

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <Jumbotron className={classes.jumbotron}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography className={classes.beginning_word}>
              WE ARE
            </Typography>
            <Typography className={classes.title} component={"h1"}>
              Building <br /> 
              with the founders,<br />
              accelerate <br />
              the shift
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.jumbotronImageWrapper}>
              <img className={classes.jumbotronImage} src='/svg/index1.svg' />
            </div>
          </Grid>
        </Grid>
      </Jumbotron>

      <section className={classes.visionSection}>
        <Container maxWidth="md" className={classes.vision_width}>
          <Grid container>
            <Grid item xs={12} md={2}>
              <Typography
                className={classes.visionTitle}
                component="h2"
              >
                Vision
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
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
                <Grid className={classes.valueimg} item xs={12} md={6}>
                  <img src="/svg/index4.svg" alt="tbd" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    className={classes.valueDescription}
                    align={"left"}
                  >
                    We believe Community, Composability and Sustainability are the key components of blockchain ecosystem.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className={classes.valueContainer} container spacing={8}>
                <Grid className={classes.valueimg} item xs={12} md={6}>
                  <img src="/svg/index3.svg" alt="tbd" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography className={classes.valueDescription}>
                    Ellipti focuses on how to make a sustainable growth, covering overall necessities in the crypto market with the expertise and various experiences.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className={classes.valueContainer} container spacing={8}>
                <Grid className={classes.valueimg} item xs={12} md={6}>
                  <img src="/svg/index2.svg" alt="tbd" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography className={classes.valueDescription}>
                    Ellipti accelerates teams mainly in the Korean market, but further to the wider Asian market, building a strong network between solid founders and teams.
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