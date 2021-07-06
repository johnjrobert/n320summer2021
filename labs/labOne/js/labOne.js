"use strict";

let drops = [];
let xChange;
let rain = new RainDrop(25, 10, 10, [166, 214, 222]);
const wetGround = new Ground(800, 100, 0, 500);

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 50; i++) {
    drops.push(rain);

    console.log("hello!");
  }
  // rain.xChange = random(0, 400);
}

function draw() {
  background("gray");

  for (let i = 0; i < 50; i++) {
    drops.display();
  }
  wetGround.display();
}
