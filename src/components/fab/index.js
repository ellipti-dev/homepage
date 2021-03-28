import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 440,
    right: theme.spacing(3),
    width: 120,
    borderRadius: '3px',
  },
  header: {
    padding: '10px 12px',
    display: 'flex',
    justifyContent: 'flex-start',
    borderBottom: '1px solid #D9D9D9',
  },
  title: {
    fontStyle: 'italic',
    fontSize: 13,
    fontWeight: 500,
    color: '#878787',
  },
  itemWrapper: {
    margin: 0,
    listStyle: 'none',
    padding: '16px 12px 10px 12px',
  },
  item: {
    fontSize: 12,
    fontWeight: 500,
    color: '#292929',

    letterSpacing: -0.3,
    lineHeight: 1.2,
    marginBottom: 12,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'top',

    '&:hover': {
      color: '#878787',
    }
  },
}));

const FloatingActionButton = ({ items }) => {
  const classes = useStyles();

  return (
    <Hidden mdDown>
      <Paper
        className={classes.root}
        component='nav'
        elevation={3}
      >
        <div className={classes.header}>
          <Typography className={classes.title} component="h3">
            On this Section
          </Typography>
        </div>
        <ul className={classes.itemWrapper}>
          {items.map((item) => (
            <li key={item.anchor}>
              <a
                className={classes.item}
                href={`#${item.anchor}`}
                key={item.anchor}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Paper>
    </Hidden>
  );
};

export default FloatingActionButton;