const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("../src/Round.js");
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");

class Game {
  constructor() {
    this.currentRound = {};
    this.cards = [];
    this.deck = {};
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
