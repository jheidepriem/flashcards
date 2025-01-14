const chai = require("chai");
const expect = chai.expect;
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");

describe("Deck", () => {
  let deck;
  let card1;
  let card2;
  let card3;
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
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    deck = new Deck([card1, card2, card3]);
  });

  it("should be a function", () => {
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Deck", () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should store the cards in the deck", () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it("should be able to count cards in the deck", () => {
    expect(deck.countCards()).to.equal(3);
  });
});
