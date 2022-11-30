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
      if(!turn.evaluateGuess()) {
        this.incorrectGuesses.push(this.returnCurrentCard().id)
       }
       return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    let math = this.incorrectGuesses.length / this.turns;
    if (math === 0) {
      let percentage = 100;
      return percentage;
    } else {
      let percentage = math * 100;
      return percentage;
      }
    }

    endRound() {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }

 


module.exports = Round;
