const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

  let card;
  let turn;
  this.beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it.skip('should be a function', function(){
    expect(turn).to.be.an.instanceof(Turn);
  })

  it.skip('should be an instance of Card', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it.skip('should have a player guess', function() {
    expect(turn.guess).to.equal('pug');
  })

  it.skip('should have player\'s current card in play', function() {
    expect(this.card).to.be.an.instanceof(Card);
  })

  it.skip('should return player\'s guess', function() {
    turn.returnGuess()
    expect(turn.returnGuess).to.deep.equal('pug');
  })

  it.skip('should return player\'s card', function() {
    turn.returnCard()
    expect(turn.returnCard).to.be.an.instanceof(Card)
  })
})