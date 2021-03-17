import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#f1f5f5',
    border: '1px solid rgba(0,0,0,.12)',
    borderRadius: '3px',
    padding: 20,
    marginBottom: 20,

    '&:last-child': {
      marginBottom: 0,
    }
  },
  header: {
    display: 'flex',
    marginBottom: 12,
  },
  imgWrapper: {
    padding: '8px 14px',
    backgroundColor: '#E4E8EB',
    border: '1px solid rgba(0,0,0,.12)',
    borderRadius: '3px',
    marginRight: 12,
    height: '53px',
  },
  rewardWrapper: {
  },
  title: {
    fontSize: 18,
    fontWeight: 500, // 400은 표가 잘 안나서 500으로넣음 400으로 안쓰게 된다면 여기에 주석으로 메시지 하나만 달아주세요
  },
  lead: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: "#4D5256",
  },
}));


const Award = ({
  title,
  lead,
  description
 }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.imgWrapper}>
          <img src='/svg/ribon.svg' alt='award' />
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
      <Typography className={classes.description} component="p">
        {description}
      </Typography>
    </div>
  )
}

export default Award;