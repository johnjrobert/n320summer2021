//base line for the playing card. 


class PlayingCard {
  //constructor to pass these up to the Deck class.
  constructor(suit, card, point, face) {
    this.suit = suit;
    this.card = card;
    this.point = point;

    this.face = "The " + card + " of " + suit;
  }
}
