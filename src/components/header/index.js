import React, { useState } from "react";
import clsx from 'clsx';
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from "@material-ui/core/Container";
import SubjectIcon from '../icons/subject';
import CloseIcon from '../icons/close';

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#191919",
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    padding: 0,
  },
  expandButton: {
    color: "rgb(255, 255, 255, 0.7)",
  },
  menuButton: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',

    '& img': {
      height: '20px',
    }
  },
  menuLogo: {
    "&:hover": {
      opacity: .7,
    }
  },
  menuItem: {
    margin: "0 20px 8px",

    color: "rgb(255, 255, 255, 0.65)",
    fontWeight: 500,
    letterSpacing: -0.3,
    textDecoration: "none",
    "&:hover": {
      color: "#fff",
      borderBottom: "1px solid #fff",
    },
    '&:last-child': {
      margin: "0 0 8px 20px",
    }
  },
  menuItemActive: {
    color: "#fff",
    borderBottom: "1px solid #fff",
  },
  mobileMenu: {
    position: 'fixed',
    zIndex: 10000,
    top: 56,
    width: '100%',
    backgroundColor: '#292929',
    borderTop: '1px solid rgba(255,255,255,.2)',
  },
  mobileMenuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 300,

    '&:hover': {
      color: 'white',
    },
  },
  activeMobileMenu: {
    color: 'white',
    fontWeight: 400,

    '&:before': {
      content: '""',
      marginRight: 6,
      width: 10,
      height: 2,
      display: 'block',
      backgroundColor: 'white',
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Collapse
      id={mobileMenuId}
      className={classes.mobileMenu}
      in={isMobileMenuOpen}
      timeout="auto"
      unmountOnExit
      component='nav'

    >
      <Container>
        <List>
          <ListItem
            button
            className={classes.mobileMenuItem}
            activeClassName={classes.activeMobileMenu}
            component={Link}
            to={"/about"}
          >
            About
          </ListItem>
          <ListItem
            button
            className={classes.mobileMenuItem}
            activeClassName={classes.activeMobileMenu}
            component={Link}
            to={"/portfolio"}
          >
            Portfolio
          </ListItem>
          <ListItem
            button
            className={classes.mobileMenuItem}
            activeClassName={classes.activeMobileMenu}
            component={Link}
            to={"/labs"}
          >
            Labs
          </ListItem>
          <ListItem
            button
            className={classes.mobileMenuItem}
            activeClassName={classes.activeMobileMenu}
            component={Link}
            to={"/public"}
          >
            Public
          </ListItem>
        </List>
      </Container>
    </Collapse>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        color="transparent"
        classes={{ root: classes.root }}
        elevation={0}
      >
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar}>
            <Link
              to={"/"}
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img 
                className={classes.menuLogo} 
                width={54} 
                src="/logo/ellipti.svg" 
                alt="ellipti logo" 
              />
            </Link>

            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <Link
                to={"/about"}
                className={classes.menuItem}
                activeClassName={classes.menuItemActive}
              >
                About
              </Link>
              <Link
                to={"/portfolio"}
                className={classes.menuItem}
                activeClassName={classes.menuItemActive}
              >
                Portfolio
              </Link>
              <Link
                to={"/labs"}
                className={classes.menuItem}
                activeClassName={classes.menuItemActive}
              >
                Labs
              </Link>
              <Link
                to={"/public"}
                className={classes.menuItem}
                activeClassName={classes.menuItemActive}
              >
                Public
              </Link>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                className={classes.expandButton}
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={isMobileMenuOpen ? handleMobileMenuClose : handleMobileMenuOpen}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <SubjectIcon/> }
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
