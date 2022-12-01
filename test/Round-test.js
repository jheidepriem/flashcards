const chai = require("chai");
const expect = chai.expect;
const Deck = require("../src/Deck.js");
const Round = require("../src/Round.js");
const Card = require("../src/Card.js");

describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should store the current deck", () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it("turns should start at 0 by default", () => {
    expect(round.turns).to.equal(0);
  });

  it("should start out without any incorrect guesses", () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should be able to return the current card", () => {
    expect(round.returnCurrentCard()).to.be.an.instanceof(Card);
  });

  it("should add to turns when turn is taken", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.turns).to.equal(2);
  });

  it("should evaluate if the guess was correct", () => {
    expect(round.takeTurn("sea otter")).to.equal("correct!");
  });

  it("should evaluate if the guess was incorrect", () => {
    expect(round.takeTurn("spleen")).to.equal("incorrect!");
  });

  it("should check to make sure user id was added to incorrect guesses array", () => {
    round.takeTurn("spleen");
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it("should check to make sure user id for the correct answer was not added to incorrect guesses array", () => {
    round.takeTurn("sea otter");
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should calculate the percentage of correct answers", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.calculatePercentCorrect()).to.deep.equal('50');
  });

  it("should print message when game is over", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    round.calculatePercentCorrect();
    round.endRound();
    expect(round.endRound()).to.equal(
      "** Round over! ** You answered 50% of the questions correctly!"
    );
  });
});