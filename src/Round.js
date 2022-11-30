const Turn = require("./Turn");

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    
  }
  
  returnCurrentCard(){
    return this.deck.cards[this.turns]
  }
  
  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.returnCurrentCard())
    this.turns++
    turn.evaluateGuess()
      if(turn.giveFeedback() === 'incorrect') {
        this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    return turn.evaluateGuess();
  }

  calculatePercentCorrect() {
    
  }

  endRound() {

  }
}

module.exports = Round;
