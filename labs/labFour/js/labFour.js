//I created functions to house each individual part.  This one is for the initial appearance.
function appear() {
  let galleryItems = document.getElementsByClassName("galleryBox");

  //   console.log(galleryItems);
  //for loop as described in the lecture.  This allows FOR all of the elements created in the array above with get Elements to be shown one after the other.
  for (let i = 0; i < galleryItems.length; i++) {
    TweenLite.from(galleryItems[i], {
      duration: 0.6,
      x: -100,
      alpha: 0,
      delay: i * 0.2,
    });
  }

  //title card, where the title goes.  Accesed through its ID.
  let titleCard = document.getElementById("title");

  TweenLite.from(titleCard, {
    duration: 1,
    x: -100,
    alpha: 0,
  });

  //the bar across the top.  Same as above.
  let topBar = document.getElementById("topBar");

  TweenLite.from(topBar, {
    duration: 1,
    x: -100,
    alpha: 0,
  });
}

//Running the function.
appear();

//Function for when the mouse hovers over the items.  I had issues trying this with loops, so I did each piece indiviually.
function hover() {
  //vars for each box.  Really struggled with loops.
  let boxOne = document.getElementById("one");
  let boxTwo = document.getElementById("two");
  let boxThree = document.getElementById("three");
  let boxFour = document.getElementById("four");
  let boxFive = document.getElementById("five");
  let boxSix = document.getElementById("six");

  //listeners for each individual box when the mouse is over it.
  boxOne.addEventListener("mouseover", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxOne, { background: "#000" });
  });

  boxTwo.addEventListener("mouseover", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxTwo, { background: "#000" });
  });

  boxThree.addEventListener("mouseover", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxThree, { background: "#000" });
  });

  boxFour.addEventListener("mouseover", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxFour, { background: "#000" });
  });

  boxFive.addEventListener("mouseover", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxFive, { background: "#000" });
  });

  boxSix.addEventListener("mouseover", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxSix, { background: "#000" });
  });
}

//running the function.
hover();

//Function for when the mouse is out of the box.
function unhover() {
  //Again, I sucked it up with arrays.  vars for each one.
  let boxOne = document.getElementById("one");
  let boxTwo = document.getElementById("two");
  let boxThree = document.getElementById("three");
  let boxFour = document.getElementById("four");
  let boxFive = document.getElementById("five");
  let boxSix = document.getElementById("six");

  //event listeners to change the color back when the mouse is out of the box. Used similar concepts from Lab Three.
  boxOne.addEventListener("mouseout", (event) => {
    // console.log("HERE!");
    TweenLite.to(boxOne, { background: "purple" });
  });
  boxTwo.addEventListener("mouseout", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxTwo, { background: "purple" });
  });

  boxThree.addEventListener("mouseout", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxThree, { background: "purple" });
  });

  boxFour.addEventListener("mouseout", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxFour, { background: "purple" });
  });

  boxFive.addEventListener("mouseout", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxFive, { background: "purple" });
  });

  boxSix.addEventListener("mouseout", (event) => {
    // console.log("Hi there");
    TweenLite.to(boxSix, { background: "purple" });
  });
}

//Running the function.
unhover();

//Function for when a box is clicked.
function click() {
  //One last time... really wish I got the arrays down.  Feeling the repition through commenting. Vars for each one.
  let exitOne = document.getElementById("one");
  let exitTwo = document.getElementById("two");
  let exitThree = document.getElementById("three");
  let exitFour = document.getElementById("four");
  let exitFive = document.getElementById("five");
  let exitSix = document.getElementById("six");

  //vars for each block of elements.
  let gallery = document.getElementById("gallery");
  let topBar = document.getElementById("topBar");
  let title = document.getElementById("title");

  //event listener for each click, making the elements disappear.  I did not get the gallery boxes to go away one at a time.

  exitOne.addEventListener("click", (event) => {
    TweenLite.to(gallery, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(topBar, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(title, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    console.log("WHAT>>>");
  });

  exitTwo.addEventListener("click", (event) => {
    TweenLite.to(gallery, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(topBar, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(title, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    console.log("WHAT>>>");
  });

  exitThree.addEventListener("click", (event) => {
    TweenLite.to(gallery, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(topBar, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(title, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    console.log("WHAT>>>");
  });

  exitFour.addEventListener("click", (event) => {
    TweenLite.to(gallery, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(topBar, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(title, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    console.log("WHAT>>>");
  });

  exitFive.addEventListener("click", (event) => {
    TweenLite.to(gallery, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(topBar, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(title, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    console.log("WHAT>>>");
  });

  exitSix.addEventListener("click", (event) => {
    TweenLite.to(gallery, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(topBar, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    TweenLite.to(title, {
      duration: 0.6,
      x: -100,
      alpha: 0,
    });

    console.log("WHAT>>>");
  });
}

//Runs the function.
click();
