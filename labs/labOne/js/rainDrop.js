class RainDrop {
  constructor(cx, cy, cr, color) {
    this.x = cx;
    this.y = cy;
    this.radius = cr;
    this.color = color;
  }

  display() {
    fill(this.color);
    this.y++;
    circle(this.x, this.y, this.radius);
  }
}
