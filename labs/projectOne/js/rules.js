//class to create the deck from other classes.

class Rules {
  constructor() {}

  //creates a new deck from the Deck.
  deck = new Deck();

  //function that wraps up everything from creating 52 cards, shuffling them, and assinging them.
  gameStart() {
    deck.newDeal();
    deck.shuffleUp();
    deck.assign();
  }
}
