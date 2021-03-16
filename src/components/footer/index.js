import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#191919",
    paddingTop: 60,
    paddingBottom: 120,
  },
  footer_logo: {
    opacity: '.54',
  },
  copyright: {
    paddingLeft: 5,
    fontWeight: 500,
    color: "rgba(255,255,255,.54)",
  },
  contact: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: -0.3,
    marginBottom: 40,
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  outLink: {
    display: "flex",
    alignItems: "center",
    color: "rgba(255,255,255,.7)",
    fontSize: 14,
    textDecoration: "none",
    marginBottom: 6,
    "&:hover": {
      color: '#fff',
      textDecoration: 'underline',
    },
    "& > svg": {
      width: 18,
      marginRight: 9,
      opacity: '.7',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root} elevation={0}>
      <Container maxWidth="md">
        <Grid container alignItems="flex-start">
          <Grid item container xs={6} alignItems="center">
            <img className={classes.footer_logo} width={42} src="/logo/ellipti.svg" alt="ellipti" />
            <Typography className={classes.copyright} component="p">
              {` © ${new Date().getFullYear()}.`}
            </Typography>
          </Grid>
          <Grid item container xs={6} alignItems="center" justify="flex-end">
            <div>
              <Typography className={classes.contact} component="p">
                Contact Us
              </Typography>
              <ul className={classes.list}>
                <li>
                  <a
                    href="mailto:info@ellipti.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.outLink}
                  >
                    <EmailIcon />
                    info@ellipti.io
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/blocktoday"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.outLink}
                  >
                    <TelegramIcon />
                    https://t.me/blocktoday
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/elliptiofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.outLink}
                  >
                    <TwitterIcon />
                    @ElliptiOfficial
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
