const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js");

describe("Turn", () => {
  let card;
  let turn;
  beforeEach(() => {
    card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    turn = new Turn("pug", card);
  });

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should have a player's guess", () => {
    expect(turn.userGuess).to.equal("pug");
  });

  it("should have player's current card in play", () => {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it("should return player's guess", () => {
    expect(turn.returnGuess()).to.equal("pug");
  });

  it("should return player's card", () => {
    expect(turn.returnCard()).to.be.an.instanceof(Card);
  });

  it("should evaluate player's guess", () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("should tell the user whether they're answer is correct or incorrect", () => {
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});
