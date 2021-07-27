//Class for the deck of cards.  This is where all of the functions regarding the deck of cards happens.

class Deck {
  constructor() {
    //array for the total deck of cards
    this.deckOfCards = [];

    //array for player one.
    this.handOne = [];

    //array for player two.
    this.handTwo = [];
  }

  //function to create all of the cards.
  newDeal() {
    //suits for cards... I put fun names, so hopefull they are not confusing.
    let suits = ["Shoves", "Clubbies", "Hartzels", "Rocks"];
    //The 13 cards.
    let cards = [
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    //points each card is worth.
    let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    //empty array that is filled from the card class relation.
    let face = [];

    //Here is where I got tripped up.  I knew I needed to loop multiple items into a single array, and I wasn't sure how to do two levels.  I ended up looking up a Medium article, and following its suggestion in using the variable j to cover the two 13 piece arrays, and i for the smaller 4 piece.  By doing this, I was able to create 52 objects in the array. I did this by use the relation between teh card class and deck class to make a new card for each of the variables.
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < points.length; j++) {
        this.deckOfCards.push(
          new PlayingCard(suits[i], cards[j], points[j], face[j])
        );
      }
    }
  }

  //shuffle function.
  shuffleUp() {
    //three levels of shuffle.
    let mixOne = 0;
    let mixTwo = 0;
    let placeHolder = 0;

    //A for loop to shuffle the cards 1000 times.
    for (let i = 0; i < 1000; i++) {
      //The three levels was another idea I got from the Medium article. I was able to use the loop to keep making the three different levels of the shuffle random, and then replace them with one another over and over.
      mixOne = Math.floor(Math.random() * this.deckOfCards.length);
      mixTwo = Math.floor(Math.random() * this.deckOfCards.length);
      placeHolder = this.deckOfCards[mixOne];
      this.deckOfCards[mixOne] = this.deckOfCards[mixTwo];
      this.deckOfCards[mixTwo] = placeHolder;
    }
  }

  //assigning function.  I took the first 26 cards from the deck of cards and put them into player ones hand, and then did the same for hand two for the computer.
  assign() {
    this.handOne = deck.deckOfCards.slice(0, 26);
    this.handTwo = deck.deckOfCards.slice(26, 52);

    console.log(this.handOne, this.handTwo);
  }

  // I feel like I could have done this better, but this function is a huge hodge podge of what I needed on the screen when a turn is played.
  playYourCard() {
    //var for the player card SVG.
    let playTheCard = document.getElementById("playerCard");

    //var for the top card for player.
    let playerOneCard = this.handOne[0];

    //var for the top card for computer.
    let computerCard = this.handTwo[0];
    console.log(playerOneCard, computerCard);

    //empty variable for the scores.
    let playerScore = 0;
    let compScore = 0;

    //event listeneer for when the player card is click.
    playTheCard.addEventListener("click", (event) => {
      //if statement for if the playerOneCard is worth more points than the computer.
      if (playerOneCard.point > computerCard.point) {
        console.log("YES");

        //Removes losing top card from computers array. Used w3 school to learn this trick.
        this.handTwo.shift();

        //resets the computerCard cariable to be the top card of array after previous is removed.
        computerCard = this.handTwo[0];

        //Another trick from w3 school, takes the top card off the players hand, and pushes it to the bottom of the array/deck.
        this.handOne.push(this.handOne.shift());

        //Resets variable.
        playerOneCard = this.handOne[0];
        console.log(playerOneCard, computerCard);
        console.log(this.handOne, this.handTwo);

        //Resets player score to add 1 point.
        playerScore = playerScore + 1;

        //Makes the scores pop up on the screen and update.
        document.getElementById("pScore").innerHTML =
          "Player Score: " + playerScore;
        document.getElementById("cScore").innerHTML =
          "Computer Score: " + compScore;

        //nested if statement for what happens when one of the arrays runs out of cards.
        if (this.handOne == []) {
          console.log("Computer Wins");
        } else if (this.handTwo == []) {
          console.log("Player Wins");
        }

        //Else portion for when the player does not win the hand. Draws go to the computer.
      } else {
        console.log("DANG");

        //removes card from player ones hand.
        this.handOne.shift();

        //resets the top card variable for player one.
        playerOneCard = this.handOne[0];

        //pushes computers card to the bottom of his deck.
        this.handTwo.push(this.handTwo.shift());

        //resets computer top card variable.
        computerCard = this.handTwo[0];

        console.log(playerOneCard, computerCard);
        console.log(this.handOne, this.handTwo);

        //updates computer score.
        compScore = compScore + 1;

        //updates screen with score.
        document.getElementById("pScore").innerHTML =
          "Player Score: " + playerScore;
        document.getElementById("cScore").innerHTML =
          "Computer Score: " + compScore;

        //if statement for when one array is empty.
        if (this.handOne == []) {
          console.log("Computer Wins");
        } else if (this.handTwo == []) {
          console.log("Player Wins");
        }
      }
    });
  }

  //function for showing which card is being played.
  showCard() {
    let showPlayerCard = document.getElementById("playerCard");
    // let showComputerCard = document.getElementById("playerReadOut");

    //another event listener for when the player card is clicked.
    showPlayerCard.addEventListener("click", (event) => {
      //changes what is in the face portion of the first object in the array to a string that can be seen as text on screen.
      let playerText = this.handOne[0].face.toString();
      console.log(playerText);

      //changes paragraph on page to feature the above variable.
      document.getElementById("playerReadOut").innerHTML = playerText;

      //same as above, only for computer's side.
      let computerText = this.handTwo[0].face.toString();
      console.log(computerText);

      document.getElementById("computerReadOut").innerHTML = computerText;
    });
  }
}
