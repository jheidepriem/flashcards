const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Game = require('../src/Game.js')

describe('Game', () => {

  let card1;
  let cards;
  let deck;
  let round;
  let game;

beforeEach(function() {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  deck = new Deck(cards);
  round = new Round(deck);
  game = new Game(round);
})

it('should be a function', () => {
  expect(Game).to.be.a('function')
})

it('should be an instance of Game', () => {
  expect(game).to.be.an.instanceof(Game);
})

it('should have a method to start the game', () => {

  })
})