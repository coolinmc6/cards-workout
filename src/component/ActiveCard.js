import React, { useEffect, useState } from 'react';
import { createSuit, getWorkout, getValue } from '../helpers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '5fr 5fr',
  },
  card: {
    fontSize: 20,
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0px 0px 15px #ccc',
  },
  workoutParent: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  reps: {
    // fontSize: 18,
  },
  littleSuit: {
    position: 'absolute',
    right: '10%',
    top: '5%'
  },
  bigSuit: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '25%',
    fontSize: 80,
  },
  value: {
    position: 'absolute',
    left: '10%',
    top: '5%'
  }
}))

// Active Card & Workout
const ActiveCard = ({ activeCard, legend }) => {
  if(activeCard) {
    const value = getValue(activeCard);
    console.log({ activeCard, legend, value })
    
  }

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.card}>{activeCard && (
        <> 
          <div className={classes.littleSuit}>{createSuit(activeCard[1])}</div>
          <div className={classes.value}>{activeCard[0]}</div>
          <div className={classes.bigSuit}>{createSuit(activeCard[1])}</div>
        </>
      )}</div>
      <div className={classes.workoutParent}>
        <div className={classes.reps}>{activeCard && getValue(activeCard)}</div>
        <div className={classes.workout}>{activeCard && legend[activeCard[1]]}</div>
      </div>
    </div>
  )
}

export default ActiveCard;