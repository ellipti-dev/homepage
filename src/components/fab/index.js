import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 450,
    right: theme.spacing(3),
    width: 120,
    borderRadius: '3px',
  },
  header: {
    padding: '9px 20px',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #EAEAEA',
  },
  title: {
    fontStyle: 'italic',
    fontSize: 10,
  },
  itemWrapper: {
    margin: 0,
    listStyle: 'none',
    padding: '12px 8px 0px 8px',
  },
  item: {
    display: 'block',
    fontSize: 11,
    color: '#878787',
    lineHeight: 1,
    marginBottom: 10,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'top',

    '&:hover': {
      fontWeight: 500,
      color: '#000000',
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
        elevation={4}
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
