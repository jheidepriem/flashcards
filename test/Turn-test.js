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

  it('should be a function', function(){
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should be an instance of Card', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should have a player\'s guess', function() {
    expect(turn.userGuess).to.equal('pug');
  })

  it('should have player\'s current card in play', function() {
    expect(turn.card).to.be.an.instanceof(Card);
  })

  it('should return player\'s guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  })

  it('should return player\'s card', function() {
    expect(turn.returnCard()).to.be.an.instanceof(Card)
  })

  it('should evaluate player\'s guess', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should tell the user whether they\'re answer is correct or incorrect', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });
})