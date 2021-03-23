import React, { useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #D9D9D9',
    borderRadius: 3,
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
  },
  hover: {
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px rgba(0, 0, 0, 0.06)',
  },
  imageSection: {
    position: 'relative',
    height: '100%',
    paddingTop: '80%', // aspect ratio 1:1
    width: '100%',
    borderBottom: '1px solid #D9D9D9',

    '& img': {
      width: '100%',
      padding: '36px',
      position: 'absolute',
      margin: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  projectNameSection: {
    display: 'block',
    padding: 11,
    height: 74,
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      // 호버시 감싸는 전체 박스에 그림자 생기기
      '& $projectName': {
        textDecoration: 'underline',
      },
      '& $projectCategory': {
        textDecoration: 'underline',
      }
    }
  },
  projectName: {
    fontSize: 14,
    color: '#292929',
    fontWeight: 500,
    marginBottom: 4,
  },
  projectCategory: {
    fontSize: 12,
    lineHeight: 1.2,
    color: '#4D5256',
  },
}));

const ProjectItem = ({ item }) => {
  const classes = useStyles();
  const [isHover, setHover] = useState(false);
  const { name, image, link, type } = item;

  const handleHover = () => {
    setHover(true);
  }

  const handleLeave = () => {
    setHover(false);
  }

  return (
    <Paper
      className={clsx(classes.root, { [classes.hover]: isHover })}
    >
      <div className={classes.imageSection}>
        <img src={image} alt={name} />
      </div>
      <a 
        className={classes.projectNameSection}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Typography
          variant="body1"
          component='p'
          className={classes.projectName}
        >
          {name}
        </Typography>
          <Typography
          variant="body1"
          component='p'
          className={classes.projectCategory}
        >
          {type}
        </Typography>
      </a>
    </Paper>
  )
}

export default ProjectItem;