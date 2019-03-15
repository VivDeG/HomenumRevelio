const Square = require('./square');

class Board {
  constructor(canvas, c) {
    this.canvas = canvas;
    this.c = c;
    this.grid = [];

    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const s = new Square(x,y);
        this.grid.push(s);
      }
    }
  }

  draw() {
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i].draw(this.c);
    }
  }

  findClickedSquare(x,y,e) {
    this.grid.forEach(square => {
      if (square.clicked(x, y, this.c)) {
        square.revealSquare(this.c);
      }
    });
  }
}

module.exports = Board;