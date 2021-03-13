import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import TocIcon from "@material-ui/icons/Toc";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// import {navigate} from 'gatsby'; //import navigate from gatsby
// import scrollTo from 'gatsby-plugin-smoothscroll';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FloatingActionButton = ({ items }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = () => {
    // e.preventDefault();
    setAnchorEl(null);
    // scrollTo(`#${item}`)
  };

  return (
    <>
      <Fab
        variant="extended"
        className={classes.fab}
        color="secondary"
        aria-label="toc"
        aria-controls="toc"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <TocIcon className={classes.extendedIcon} />
      </Fab>
      <Menu
        id="toc-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {items.map((item) => (
          <MenuItem
            component="a"
            href={`#${item.anchor}`}
            key={item.anchor}
            onClick={handleClickItem}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default FloatingActionButton;
