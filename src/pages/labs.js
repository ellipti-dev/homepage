import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout";
import quote from '../data/quote';
import FloatingActionButton from '../components/fab';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
  },
  lead: {
    fontSize: '1.5rem',
  },
  contentDiv: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  divier: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
  },
  quote: {
    color: `${theme.palette.text.primary} !importat`,
    
    '&:hover': {
      color: `${theme.palette.secondary.main} !important`,
    }
  }
}));


// markup
const LabsPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <section className={classes.section}>
        <Typography variant="h1" component="h1" gutterBottom>
          Labs
        </Typography>
        <Typography variant="body1" component="p" className={classes.lead} gutterBottom>
          Ellipti Labs is research-based fund to invest and empower early-stage
          blockchain projects, focusing on the long-term growth.
        </Typography>
      </section>

      <Divider />

      <section className={classes.section} id='research'>
        <Typography variant="h2" component="h2" gutterBottom>
          Research
        </Typography>
        <Divider className={classes.divier} />
        <Typography variant="body1" component="p" gutterBottom>
          {'With the comprehensive research based on technical & business perspectives, excavating the winning projects'}
        </Typography>


        <div className={classes.contentDiv}>
          <Typography variant="h4" component="h3" gutterBottom>
            Coinone DeFi Report
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Under the partnership with Coinone, sourced DeFi report as a snapshot
            of DeFi ecosystem's growth with insights to the Korean crypto
            community
          </Typography>
        </div>

        <div className={classes.contentDiv}>
          <Typography variant="h4" component="h3" gutterBottom>
            Join:D Newscomment
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            Provided daily analysis on macro/micro issues in blockchain market
            with Join:D, subsidiary of the top traditional media JoongAng Daily,
            backed by Hahsed, Bitmain.
          </Typography>
        </div>
        <div className={classes.contentDiv}>
          <Typography variant="h4" component="h3" gutterBottom>
            Everett Protocol
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Staking Derivatives for better PoS
            <br />
            <br />
            Everett Protocol allows users to create 'shadow tokens' called bAtoms
            that is fully backed by their staking position to solve the problem:
            “What if delegators could receive staking rewards and “What if
            delegators could receive staking rewards and be incentivized to pool
            their assets into DeFi simultaneously?” Ellipti came up with the
            answer: bAtoms, staking positions collateralized shadow token that
            delegators can use to pool into DeFi protocols.
          </Typography>
          <ul>
            <li>
              1st Prize @ HackAtom Seoul 2019
              <br />
              Over-collateralized staking derivatives with a SDK Uniswap module
              over IBC and a fully supported UX.
            </li>
            <li>
              1st Prize @ SF DeFi Hackathon 2019
              <br />
              {"Liquid Staking Position (LSP) NFTs, an additional token that has governance rights & receives rewards."}
            </li>
          </ul>
        </div>
      </section>

      <section className={classes.section} id='investment'>
        <Typography variant="h2" component="h2" gutterBottom>
          Investment
        </Typography>
        <Divider className={classes.divier} />

        <Typography variant="body1" component="p" gutterBottom>
          Choose and support the right projects, bringing ideas into reality
        </Typography>

        <div className={classes.contentDiv}>
          <Typography variant="h4" component="h3" gutterBottom>
            Blockshow Startup Pitch-race
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            {"Ellipti Particiated as a judge with the reputational VCs as Winklevoss/SOSV/Fenbushi at Singapore Blockshow."}
            <br />
            {"Judged and Advised the idea, business model & the execution plan/feasibility."}
          </Typography>
        </div>


        <div className={classes.contentDiv}>
          <Typography variant="h4" component="h3" gutterBottom>
            Venture Program with Traditional VC
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            {"Led client’s participation in the Bigbang Angels Venture program for its expansion in the Korean market & investment pitch."}
            <br />
            {"Being main communication channel: Participated Malta Blockchain week business trip & meetings, pitched to the crowd of traditional VCs and proceeded with the follow-up meetings."}
          </Typography>
        </div>

        <div className={classes.contentDiv}>
          <Typography variant="h4" component="h3" gutterBottom>
            PAX Economy TV Panelist
          </Typography>

          <Typography variant="body1" component="p" gutterBottom>
            Shared insights on various concepts such as Stable coin / STO /
            Scaling solution…etc. PAX ETV is a boradcast company focuses on
            economy with its own local TV channel.
          </Typography>
        </div>
      </section>

      <section className={classes.section} id='ellipti-in-public'>
        <Typography variant="h2" component="h2" gutterBottom>
          Ellipti In Public
        </Typography>
        <Divider className={classes.divier} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h3" gutterBottom>
              Presence
            </Typography>
            <Paper>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Speaker @ Congress Policy Seminar 2021 (Hosted by Blockmedia)"
                  />
                </ListItem>
                <Divider variant="root" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Speaker @ The Conference 2020 (Hosted by Maeil Economy)"
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Mentor @ Blahblock mentoring program (Hosted by Ministry of Science and Technology)"
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Speaker @ Blockchain week 2020 (Hosted by Ministry of Science and Technology)"
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Speaker @ Dystopians Labs Liquidity 2020"
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Mentor @ Founders in Jeju (Hosted by Decenter)"
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Speaker @ WBF 2018"
                    secondary="Comparative analysis on East-Asian countries about their own approach, strategies, state of affairs. Regulation vs Innovation in Korea. Blockchain Before Bitcoin in China. Regulation as Minimal Protection in Japan."
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Speaker @ ETHCON Seoul 2019"
                    secondary="Pitched about Mimblewimble: Scalable Privacy Protocol. Mostly about its components and pillars such as UTXO, ECC, Homomorphic Encryption, Pedersen Commitment, Confidential Transaction, Range Proof, Coin Join, Cut Through."
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Pitch day @ Belgium Embassy in Korea"
                    secondary="With the Korean blockchain companies as GroundX, Metadium, Blocko, explained on the importance of Korean blockchain market with the crowd of Belgium embassy, bank government officials."
                  />
                </ListItem>
                <Divider variant="middle" component="li" />
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h3" gutterBottom>
              Quote
            </Typography>
            <Paper>
              <List>
                {quote.map(item => (
                   <>
                    <ListItem
                      component='a'
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                    >
                      <ListItemText
                        // todo / hover fix해야함
                        classes={{ root: classes.quote}}
                        primary={item.title}
                        secondary={item.media}
                      />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                  </>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </section>
      <FloatingActionButton
        items={[
            {label: 'Research', anchor: 'research'},
            {label: 'Investment', anchor: 'investment'},
            {label: 'Ellipti In Public', anchor: 'ellipti-in-public'},
          ]}
      />
    </Layout>
  );
};

export default LabsPage;
