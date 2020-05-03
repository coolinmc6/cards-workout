import React from 'react';
// Build Deck
const buildDeck = () => {
	const suits = ['C', 'D', 'H', 'S']
	const denoms = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A']
	const cards = [];
	for(let i = 0; i < suits.length; i++) {
		for(let j = 0; j < denoms.length; j++) {
			let card = denoms[j] + suits[i];
			cards.push(card);
		}
	}
	return cards;
}

// Value of Card
const getValue = (card) => {
  let value;
  switch(card[0]) {
    case 'T':
      value = 10;
      break;
    case 'J':
      value = 11;
      break;
    case 'Q':
      value = 12;
      break;
    case 'K':
      value = 13;
      break;
    case 'A':
      value = 14;
      break;
    default:
      value = Number(card[0]);
      break;
  }
  return value;
}

const getWorkout = ({ card, woLibrary }) => {
  return woLibrary[card[1]]
}

const createSuit = (suit) => {
  let entity = suit === 'C' ? '&clubs;' : suit === 'S' ? '&#9824;' : suit === 'D' ? '&#9830;' : '&#x2665;'; 
  return (
    <span dangerouslySetInnerHTML={{__html: entity}} />
  )
}

const library = {
	standard: {
		C: 'Squats (2x)',
		S: 'Sit-ups / Crunches',
		H: 'Push-ups',
		D: 'Curls'
	},
	core: {
		C: 'Left Plank',
		S: 'Right Plank',
		H: 'Sit-ups',
		D: 'Push-ups'
	},
	legs: {
		C: 'Lunges',
		S: 'Squats',
		H: 'Bulgarian Lunges',
		D: 'Crab Walk'
	}
}

export {
  buildDeck, createSuit, getValue, library
}