class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.userGuess) {
      return true;
    }
    return false;
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}

module.exports = Turn;
