import React, { useEffect, useState } from 'react';
import { createSuit, getWorkout, getValue } from '../helpers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '5fr 5fr',
  },
  card: {
    fontSize: 100,
    textAlign: 'center',
  },
  workoutParent: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  reps: {
    // fontSize: 18,
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
          {activeCard[0]}
          {createSuit(activeCard[1])}
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