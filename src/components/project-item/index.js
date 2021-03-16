import React from 'react';
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
      '& $root': {
        boxShadow: '0 2 6 rgba(0,0,0,.06)',
      },
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
  const { name, image, link, type } = item;

  return (
    <Paper
      className={classes.root}
      elevation={3}
      // 여기다가 호버시 희망하는 엘레베이션 레벨을 주석으로 남겨주세요
    >
      <div className={classes.imageSection}>
        <img src={image} alt={name} />
      </div>
      <a 
        className={classes.projectNameSection}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
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