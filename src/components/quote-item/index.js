import React, {useMemo} from "react";
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
    boxShadow: 'none',

    '&:hover': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4), 0px 6px 12px rgba(0, 0, 0, 0.12)',

      '& $icon': {
        top: theme.spacing(1/2),
        right: theme.spacing(1/2),
        color: '#FFE924',
      },
    },
  },
  icon: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),

    transition: 'top 0.2s ease-out, right 0.2s ease-out',
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
  const randomNumber = useMemo(() => Math.floor(Math.random() * (5 - 1)), []);
  const isOdd = useMemo(() => (index + randomNumber) % 3 === 0, [index]);

  return (
    <Paper
      component="a"
      elevation={1}
      className={clsx(classes.root, { [classes.oddRoot]: isOdd })}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CallMadeIcon
        className={clsx({ [classes.oddIcon]: isOdd }, classes.icon,)}
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
