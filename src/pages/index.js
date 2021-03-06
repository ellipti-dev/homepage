import * as React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  jumbotron: {
  },
  title: {
    fontSize: '60px',
    color: '#fff',
    fontWeight: 'normal',
    lineHeight: 1.3,
    textDecoration: 'underline',
    width: '60%',
  },
  visionSection: {
    paddingTop: 73,
    paddingBottom: 86,
    backgroundColor: '#F8FAFB',
  },
  visionTitle: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  visionDescription: {
    fontSize: 16,
  },
  valueSection: {
    paddingTop: 44,
    paddingBottom: 160,
  },
  valueTitle: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  valueDescription: {
    fontSize: 16,
  },
  valueContainer: {
    paddingTop: 81,
  }
}));

// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.root}>
      <Jumbotron className={classes.jumbotron}>
        <Typography
          className={classes.title}
          component={'h1'}
          gutterBottom
        >
          Building with the founders, accelerate the shift
        </Typography>
      </Jumbotron>
  
      <section className={classes.visionSection}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={2}>
              <Typography
                className={classes.visionTitle}
                component='h2'
                gutterBottom
              >
                Vision
              </Typography>
            </Grid>
             <Grid item xs={12} sm={10}>
              <Typography
                className={classes.visionDescription}
                component='p'
                gutterBottom
              >
                Ecosystem builder for the blockchain companies to navigate the market pursuing excellence with the right strategy and implementations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.valueSection}>
        <Container>
          <Typography
            className={classes.valueTitle}
            component='h2'
            align={'center'}
            gutterBottom
          >
            What is <br />
            Ellipti’s value proposition?
          </Typography>

          <Grid 
            className={classes.valueContainer}
            container
            spacing={8}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                align={'left'}
                gutterBottom
              >
                {'From a project to the company with sustainable growth backed by generalists & specialists.'}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src='https://dummyimage.com/600x400/000/fff&text=TBD' alt='tbd' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src='https://dummyimage.com/600x400/000/fff&text=TBD' alt='tbd' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                align={'left'}
                gutterBottom
              >
                {'Ellipti covers overall necessities in the crypto market with the expertise and various experiences'}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                align={'left'}
                gutterBottom
              >
                {'Ellipti advisory & Ellipti labs accelerate teams mainly in the Korean market, further to the other major local markets, aiming to grow the sustainable & strong ecosystem'}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src='https://dummyimage.com/600x400/000/fff&text=TBD' alt='tbd' />
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  )
}

export default IndexPage
