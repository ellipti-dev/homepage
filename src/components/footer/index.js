import React from 'react';
import Container from '@material-ui/core/Container';
import Divder from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    paddingBottom: theme.spacing(5),
  },
  divider: {
    marginTop: theme.spacing(5),
  },
  outLink: {
    color: theme.palette.grey[200],
    padding: theme.spacing(2),
    '&:hover': {
      color: theme.palette.secondary.main,
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer
      className={classes.root}
      elevation={0}
    >
      <Container>
        <Divder className={classes.divider} />
        <Grid
          container
        >
          <Grid
            item
            container
            xs={6}
            alignItems="center"
          >
            <img 
              width={64}
              src='/logo/ellipti_white.svg'
              alt="ellipti"
            />
          </Grid>
          <Grid
            item
            container
            xs={6}
            alignItems="center"
            justify="flex-end"
          >
            <a href="https://t.me/blocktoday" target="_blank" rel="noopener noreferrer" className={classes.outLink}>
              <TelegramIcon />
            </a>
            <a href="https://twitter.com/elliptiofficial" target="_blank" rel="noopener noreferrer" className={classes.outLink}>
              <TwitterIcon />
            </a>
            <a href="mailto:info@ellipti.io" target="_blank" rel="noopener noreferrer" className={classes.outLink}>
              <EmailIcon />
            </a>
          </Grid>
        </Grid>
        <Typography variant="body1" color="textSecondary">
          {`Copyright © ${new Date().getFullYear()}.`}
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer;