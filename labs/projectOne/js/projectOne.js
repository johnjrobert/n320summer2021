//Main JS page, could have probably combined this with the rules page.

//sets variable for portions of each class.
let deck = new Deck();
let rules = new Rules();

//runs the functions to use the shuffled and assigned deck, click and show.
rules.gameStart();
deck.playYourCard();
deck.showCard();
