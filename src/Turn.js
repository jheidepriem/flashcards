class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
    this.correct = false;

  }

  returnGuess() {
    return this.userGuess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess(){
    if (this.card.correctAnswer === this.guess) {
      this.correct = true;
      return true;
    } else {
      this.correct = false;
      return false;
    }

  }

  giveFeedback() {
    if(this.correct) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}



module.exports = Turn;