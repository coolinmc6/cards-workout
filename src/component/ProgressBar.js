import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '30px 100px 1fr 60px',
    padding: '2px 5px',
    fontSize: 18,
  },
  suit: {
    textAlign: 'center',
    fontSize: 24,
  },
  display: {
    textAlign: 'center',
  },
  percent: {
    textAlign: 'center',
  },
  red: {
    color: 'red'
  }
}))

const ProgressBarStyled = withStyles({
  root: {
    height: 16,
  },
  barColorPrimary: {
    backgroundColor: '#168BAF', // color of actual progress bar
  },
})(LinearProgress);

const createSuit = (suit) => {
  let entity = suit === 'C' ? '&clubs;' : suit === 'S' ? '&#9824;' : suit === 'D' ? '&#9830;' : '&#x2665;'; 
  return (
    <div dangerouslySetInnerHTML={{__html: entity}} />
  )
}

const ProgressBar = ({ numerator, denominator, suit, display }) => {
  const value = numerator / denominator * 100
  const classes = useStyles();
  const suitElem = suit ? createSuit(suit) : '';
  return (
    <div className={classes.root}>
      <div className={`${classes.suit} ${['H','D'].includes(suit) && classes.red}`}>{suitElem}</div>
      <div className={classes.display}>{display}</div>
      <ProgressBarStyled variant="determinate" value={value} />
      <div className={classes.percent} >{`${value.toFixed(1)}%`}</div>
    </div>
  )
  
}

export default ProgressBar;