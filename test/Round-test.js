const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');

describe('Round', () => {
  let round;
  let deck;
  let card1;
  let card2;
  let card3;
  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
     deck = new Deck([card1, card2, card3]);
     round = new Round(deck);
  })

})
