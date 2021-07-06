class RainDrop {
  constructor(cx, cy, cr, color) {
    this.x = cx;
    this.y = cy;
    this.radius = cr;
    this.color = color;
  }

  display() {
    fill(this.color);
    // this.x = random(800);
    this.y++;

    if (this.y > 500) {
      this.y = 1;
      this.x = random(800);
    }
    circle(this.x, this.y, this.radius);
  }
}
