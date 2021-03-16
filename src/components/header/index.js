import React, { useState } from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000",
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
  menuItem: {
    margin: "0 20px 8px",

    color: "rgb(255, 255, 255, 0.65)",
    fontWeight: 500,
    letterSpacing: -0.5,
    textDecoration: "none",
    "&:hover": {
      color: "#fff",
      borderBottom: "1px solid #fff",
    },
  },
  menuItemActive: {
    color: "#fff",
    borderBottom: "1px solid #fff",
  },
  mobileMenuItem: {},
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
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        className={classes.mobileMenuItem}
        component={Link}
        to={"/about"}
      >
        About
      </MenuItem>
      <MenuItem
        className={classes.mobileMenuItem}
        component={Link}
        to={"/portfolio"}
      >
        Portfolio
      </MenuItem>
      <MenuItem
        className={classes.mobileMenuItem}
        component={Link}
        to={"/labs"}
      >
        Labs
      </MenuItem>
      <MenuItem
        className={classes.mobileMenuItem}
        component={Link}
        to={"/public"}
      >
        Public
      </MenuItem>
    </Menu>
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
              <img src="/logo/ellipti.svg" alt="ellipti logo" />
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
                onClick={handleMobileMenuOpen}
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
