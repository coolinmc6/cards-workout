import React, { useState, useEffect } from 'react';
import _ from 'lodash';

// Material UI
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// Components
import ActiveCard from '../component/ActiveCard';
import ProgressBar from '../component/ProgressBar';
import Stat from '../component/Stat';

// Helpers
import { buildDeck, getValue, library } from '../helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    minHeight: '90vh',
    width: '100vw',
    gridTemplateRows: '100px 1fr 80px',
    maxWidth: 800,
    margin: '0 auto',
  },
  btnBar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  stats: {},
  main: {
    paddingTop: 10,
  },
  progress: {}

}));

const Home = () => {
  const classes = useStyles();
  const [deck, setDeck] = useState([])
  const [activeCard, setActiveCard] = useState(null)
  const [completedCards, setCompletedCards] = useState([])
  const [woLibrary, setWoLibrary] = useState(library.standard)

  // Change Library


  // Suits
  const [total, setTotal] = useState(0);
  const [clubs, setClubs] = useState(0)
  const [diamonds, setDiamonds] = useState(0)
  const [hearts, setHearts] = useState(0)
  const [spades, setSpades] = useState(0)

  useEffect(() => {
    shuffle();
  }, [])

  const updateValues = (card) => {
    const value = getValue(card);
    
    switch(card[1]) {
      case 'C':
        setClubs(clubs+value);
        break;
      case 'D':
        setDiamonds(diamonds+value);
        break;
      case 'H':
        setHearts(hearts+value);
        break;
      case 'S':
        setSpades(spades+value);
        break;
    }
    setTotal(total+value);
  }

  const nextCard = () => {
    const knockoff = deck.shift();
    updateValues(knockoff);
    const newActive = deck[0] 
    setActiveCard(newActive);
    setDeck([...deck])
    setCompletedCards([...completedCards, knockoff]);
  }

  const resetAll = () => {
    setTotal(0);
    setClubs(0);
    setDiamonds(0);
    setHearts(0);
    setSpades(0);
  }

  const shuffle = () => {
    const newDeck = _.shuffle(buildDeck());
    const newActiveCard = newDeck[0];
    resetAll();
    setDeck(newDeck);
    setActiveCard(newActiveCard);
    setCompletedCards([])
  }
  
  return (
    <div className={classes.root}>
      <div className={classes.stats}>
        <ActiveCard activeCard={activeCard} legend={woLibrary}/>
      </div>
      <div className={classes.main}>
        <div className={classes.btnBar}>
          <Button variant="contained" color="primary" onClick={nextCard}>Next Card</Button>
          <Button variant="contained" color="secondary" onClick={shuffle}>Shuffle</Button>
        </div>
        <div className={classes.stats}>
          <Stat num={0} label={'Cards Completed'} />
          <Stat num={52} label={'Cards Left'} />
        </div>
        {/* <div className={classes.workoutType}>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
        </div> */}
      </div>
      <div className={classes.progress}>
        <ProgressBar display={'total'} numerator={total} denominator={104*4} />
        <ProgressBar suit={'C'} display={woLibrary['C']} numerator={clubs} denominator={104} />
        <ProgressBar suit={'D'} display={woLibrary['D']} numerator={diamonds} denominator={104} />
        <ProgressBar suit={'H'} display={woLibrary['H']} numerator={hearts} denominator={104} />
        <ProgressBar suit={'S'} display={woLibrary['S']} numerator={spades} denominator={104} />
      </div>
    </div>
  )
}

export default Home;