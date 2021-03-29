import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CallMadeIcon from "@material-ui/icons/CallMade";

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid rgba(0,0,0,.12)',
    borderRadius: '3px',
    padding: 18,
    marginBottom: 8,
    display: 'block',
    color: '#4D5256',
    textDecoration: 'none',
    
    '&:hover': {
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 6px rgba(0, 0, 0, 0.06)',

      '& $arrow': {
        color: '#878D91',
      },
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  arrow: {
    color: '#D4D8DC',
    fontSize: 16,

  },
  contentHeader: {
    display: 'flex',
    marginBottom: 6,
  },
  imgWrapper: {
    marginRight: 15,
    height: '48px',
    width: '48px',

    '& img': {
      width: '100%',
    }
  },
  rewardWrapper: {
  },
  title: {
    fontSize: 16,
    fontWeight: 500, // 400은 표가 잘 안나서 500으로넣음 400으로 안쓰게 된다면 여기에 주석으로 메시지 하나만 달아주세요
  },
  lead: {
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: "#878D91",
  },
}));


const Award = ({
  title,
  lead,
  description,
  icon='/svg/ribon.svg',
  link='google.com',
 }) => {
  const classes = useStyles();

  return (
    <a  
      className={classes.root}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={classes.header}>
        <div className={classes.contentHeader}>
          <div className={classes.imgWrapper}>
            <img src={icon} alt={'icon'} />
          </div>
          <div className={classes.rewardWrapper}>
            <Typography className={classes.title} component="h3">
              {title}
            </Typography>
            <Typography className={classes.lead} component="p">
              {lead}
            </Typography>
          </div>   
        </div>
        <CallMadeIcon className={classes.arrow} />
      </div>
      <Typography className={classes.description} component="p">
        {description}
      </Typography>
    </a>
  )
}

export default Award;