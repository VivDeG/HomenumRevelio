const Square = require('./square');
const LEFT_CLICK = 0;
const RIGHT_CLICK = 2;

class Board {
  constructor() {
    this.grid = [];

    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const s = new Square(x,y);
        this.grid.push(s);
      }
    }
  }

  draw(c) {
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i].draw(c);
    }
  }

  findClickedSquare(x,y,button,c) {
    this.grid.forEach(square => {
      if (square.clicked(x, y, c) && !square.open) {
        if (button == LEFT_CLICK && !square.flagged) {
          square.revealSquare(c);
        }
        else if (button == RIGHT_CLICK) {
          square.toggleFlag(c);
        }
      }
    });
  }
}

module.exports = Board;
module.exports.LEFT_CLICK = LEFT_CLICK;
module.exports.RIGHT_CLICK = RIGHT_CLICK;