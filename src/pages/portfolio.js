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
             image='/logo/dydx.svg'
             name='dYdX'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/linear.svg'
              name='Linear Finance'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/basis_cash.svg'
              name='Basis Cash'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/dhedge.svg'
              name='dHedge'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/injective.svg'
              name='Injective Protocol'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/logo/ramp.svg'
             name='RAMP DeFi'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/logo/aave.svg'
             name='Aave'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/logo/synthetix.svg'
             name='Synthetix'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/logo/kava.svg'
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
              image='/logo/cere.svg'
              name='Cere Network'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
             image='/logo/akash.svg'
             name='Akash Network'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/human.svg'
              name='Human Protocol'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/lambda.svg'
              name='Lambda'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/ocean.svg'
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
             image='/logo/efforce.svg'
             name='Efforce'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/get.svg'
              name='Get Protocol'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/kleros.svg'
              name='Kleros'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/contentos.svg'
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
              image='/logo/tokamak.svg'
              name='Tokamak Network'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/cartesi.svg'
              name='Cartesi'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/matic.svg'
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
              image='/logo/beam.svg'
              name='Beam'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/dash.svg'
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
              image='/logo/meter.svg'
              name='Meter'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/klaytn.svg'
              name='Klaytn'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/elrond.svg'
              name='Elrond'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/stacks.svg'
              name='Blockstack'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/vite.svg'
              name='VITE Labs'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/nebulas.svg'
              name='Nebulas'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/nuls.svg'
              name='NULS'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/harmony.svg'
              name='Harmony'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/iota.svg'
              name='IOTA'
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProjectItem
              image='/logo/nem.svg'
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
              image='/logo/dappcom.svg'
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
