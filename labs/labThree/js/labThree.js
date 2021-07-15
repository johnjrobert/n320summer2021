//class that contains the logic for the game

class Game {
  //class props
  foundCircles = 0;
  totalCircles = 0;
  searchColor = "#99FF00";
  normalColor = "#7700AA";
  gameZone = document.getElementById("gameZone");
  foundBar = new FoundBar();

  constructor() {
    //create the circles.
    for (let i = 0; i < 25; i++) {
      let newCircle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      //Added the class of styles.
      newCircle.classList.add("gameCircle");
      newCircle.setAttribute("cx", Math.random() * 400);
      newCircle.setAttribute("cy", Math.random() * 400);

      //randomly choose what reveal color the circle is.

      if (Math.random() < 0.3) {
        newCircle.dataset.hiddenColor = this.searchColor;
        this.totalCircles++;
      } else {
        newCircle.dataset.hiddenColor = this.normalColor;
      }

      //mouse interaction.
      //when mouse is over circle shows which color is which.
      newCircle.addEventListener("mouseover", (event) => {
        event.target.style.fill = event.target.dataset.hiddenColor;
      });

      newCircle.addEventListener("mouseout", (event) => {
        event.target.style.fill = "#000";
      });

      newCircle.addEventListener("click", (event) => {
        //if users clicks on the one we are looking for
        if (event.target.dataset.hiddenColor == this.searchColor) {
          event.target.remove();

          //store how many have been clicked.
          this.foundCircles++;

          //   Update the Found UI
          this.foundBar.setPercent(this.foundCircles / this.totalCircles);
        }
      });

      //add circle to the screen
      this.gameZone.appendChild(newCircle);
    }
  }
}

class FoundBar {
  element = document.getElementById("foundBar");
  maxSize = 130;
  percent = 0;

  setPercent(percent) {
    this.percent = percent;
    this.element.setAttribute("width", this.percent * this.maxSize);
  }

  //   winColor(percent) {
  //     this.percent = percent;
  //     if (this.percent == 1) {
  //       this.element.setAttribute("color", this.searchColor);
  //     }
  //   }
}

// let f = new FoundBar();
// f.setPercent(0.5);

let g = new Game();
