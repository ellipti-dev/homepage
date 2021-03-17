import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#C4C4C4",

    // aspect ratio 1:1
    width: "100%",
    paddingTop: "100%",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  contentBox: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    width: '80%',
  },
  title: {
    fontSize: 18,
    color: "#292929",
    fontWeight: 500,
    lineHeight: 1.2,
    marginLeft: '1%',
  },
  media: {
    display: "inline-block",
    color: "#FFFFFF",
    padding: "0 6px",
    background: "#292929",
    marginBottom: 8,
  },

  oddRoot: {
    display: "flex",
    background: "#262626",

    // aspect ratio 1:1
    width: "100%",
    paddingTop: "100%",
    position: "relative",
  },
  oddIcon: {
    color: "#ffffff",
  },
  oddContentBox: {
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(2),
    width: '80%',
  },
  oddTitle: {
    color: "#fff",
    fontWeight: 300,
  },
  oddMeida: {
    color: "#292929",
    background: "#ffffff",
    fontWeight: 500,
  },
}));

const QuoteItem = ({ item, index }) => {
  const classes = useStyles();
  const randomNumber = Math.floor(Math.random() * (5 - 1));
  const isOdd = (index + randomNumber) % 3 === 0;

  return (
    <Paper
      component="a"
      elevation={1}
      className={clsx(classes.root, { [classes.oddRoot]: isOdd })}
      href={item.link}
    >
      <CallMadeIcon
        className={clsx(classes.icon, { [classes.oddIcon]: isOdd })}
      />
      <div
        className={clsx(classes.contentBox, { [classes.oddContentBox]: isOdd })}
      >
        <Typography
          component="span"
          className={clsx(classes.media, { [classes.oddMeida]: isOdd })}
        >
          {item.media}
        </Typography>
        <Typography
          component="h3"
          className={clsx(classes.title, { [classes.oddTitle]: isOdd })}
        >
          {item.title}
        </Typography>
      </div>
    </Paper>
  );
};

export default QuoteItem;
