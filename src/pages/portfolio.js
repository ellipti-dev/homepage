import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import ProjectItem from '../components/project-item';
import FloatingActionButton from '../components/fab';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
  },
  lead: {
    fontSize: '1.5rem',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
  },
}));

// markup
const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <section className={classes.section}>
        <Typography variant="h1" component="h1" gutterBottom>
          Porfolio
        </Typography>
        <Typography variant="body1" component="p" className={classes.lead} gutterBottom>
          {'Building the solid & sustainable decentralized ecosystem, with the right teams'}
        </Typography>
      </section>

      <Divider />

      <section id="defi" className={classes.section}>
        <Typography variant="h3" component="h2" gutterBottom>
          DeFi
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/portfolio/dydx.svg'
             name='dYdX'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/linear.svg'
              name='Linear Finance'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/basis_cash.svg'
              name='Basis Cash'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/dhedge.svg'
              name='dHedge'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/injective.svg'
              name='Injective Protocol'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/portfolio/ramp.svg'
             name='RAMP DeFi'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/portfolio/aave.svg'
             name='Aave'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/portfolio/synthetix.svg'
             name='Synthetix'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/portfolio/kava.svg'
             name='KAVA'
            />
          </Grid>
        </Grid>
      </section>
      
      <section id="data-storage-ai" className={classes.section}>
        <Typography variant="h3" component="h2" gutterBottom>
          Data / Storage / AI
        </Typography>
        <Divider className={classes.divider} />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/cere.svg'
              name='Cere Network'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/portfolio/akash.svg'
             name='Akash Network'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/human.svg'
              name='Human Protocol'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/lambda.svg'
              name='Lambda'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/ocean.svg'
              name='Ocean Protocol'
            />
          </Grid>
        </Grid>
      </section>
      

      <section id="application" className={classes.section}>
        <Typography variant="h3" component="h2" gutterBottom>
          Application
        </Typography>
        <Divider className={classes.divider} />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/portfolio/efforce.svg'
             name='Efforce'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/get.svg'
              name='Get Protocol'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/kleros.svg'
              name='Kleros'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/contentos.svg'
              name='Contentos'
            />
          </Grid>
        </Grid>
      </section>

      <section id='infrastructure' className={classes.section}>
        <Typography variant="h3" component="h2" gutterBottom>
          Infrastructure
        </Typography>
        <Divider className={classes.divider} />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/tokamak.svg'
              name='Tokamak Network'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/cartesi.svg'
              name='Cartesi'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/matic.svg'
              name='Matic'
            />
          </Grid>
        </Grid>
      </section>
     
      <section id='privacy' className={classes.section}>
        <Typography variant="h3" component="h2" gutterBottom>
          Privacy
        </Typography>
        <Divider className={classes.divider} />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/beam.svg'
              name='Beam'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/dash.svg'
              name='Dash'
            />
          </Grid>
        </Grid>
      </section>
      
      <section id='layer1' className={classes.section}>
        <Typography variant="h3" component="h2" gutterBottom>
          Layer1
        </Typography>
        <Divider className={classes.divider} />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/meter.svg'
              name='Meter'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/klaytn.svg'
              name='Klaytn'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/elrond.svg'
              name='Elrond'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/stacks.svg'
              name='Blockstack'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/vite.svg'
              name='VITE Labs'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/nebulas.svg'
              name='Nebulas'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/nuls.svg'
              name='NULS'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/harmony.svg'
              name='Harmony'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/iota.svg'
              name='IOTA'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/nem.svg'
              name='NEM'
            />
          </Grid>
        </Grid>
      </section>
      <section id='analytics' className={classes.section}>
        <Typography variant="h3" component="h2" gutterBottom>
          Analytics
        </Typography>
        <Divider className={classes.divider} />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/portfolio/dappcom.svg'
              name='Dapp.com'
            />
          </Grid>
        </Grid>
      </section>
      <FloatingActionButton
        items={[
          {label: 'DeFi', anchor: 'defi'},
          {label: 'Data / Storage / AI', anchor: 'data-storage-ai'},
          {label: 'Application', anchor: 'application'},
          {label: 'Infrastructure', anchor: 'infrastructure'},
          {label: 'Privacy', anchor: 'privacy'},
          {label: 'Layer1', anchor: 'layer1'},
          {label: 'Analytics', anchor: 'analytics'},
        ]}
      />
    </Layout>
  )
}

export default IndexPage
