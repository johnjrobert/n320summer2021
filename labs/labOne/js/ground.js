class Ground {
  constructor(width, height, xLoc, yLoc) {
    this.xLoc = xLoc;
    this.yLoc = yLoc;
    this.width = width;
    this.height = height;
    this.color = [0, 128, 0];
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.xLoc, this.yLoc, this.width, this.height);
  }
}
