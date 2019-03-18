import Square from './square';
export const LEFT_CLICK = 0;
export const RIGHT_CLICK = 2;

export class Board {
  constructor() {
    this.grid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    this.mines = [];
  }

  draw(c) {
    // this.placeMines();

    for (let i = 0; i < 256; i++) {
      const x = i % 16;
      const y = Math.floor(i / 16);

      let hasMine = false;
      for (let j = 0; j < this.mines.length; j++) {
        if (this.mines[j][0] == x && this.mines[j][1] == y) {
          hasMine = true;
          break;
        }
      }

      this.grid[x][y] = (new Square(x, y, hasMine));
    }
    
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        this.grid[i][j].draw(c);
      }
    }
  }

  placeMines() {
    this.mines = [[0,0],[1,0],[2,0],[3,0],[4,0]];
    while (this.mines.length < 40) {
      let x = Math.floor(Math.random() * 16), y = Math.floor(Math.random() * 16);

      for (let i = 0; i < this.mines.length; i++) {
        if (this.mines[i][0] == x && this.mines[i][1] == y) {
          continue;
        }
      }
      this.mines.push([x, y]);
    }
  }

  findClickedSquare(x,y,button,c) {
    let clickedMine = false;
    this.grid.forEach(row => {
      row.forEach(square => {
        if (square.clicked(x, y, c) && !square.open) {
          if (button == LEFT_CLICK && !square.flagged) {
            square.revealSquare(c);
            if (square.hasMine) {
              clickedMine = true;
            }
          }
          else if (button == RIGHT_CLICK) {
            square.toggleFlag(c);
          }
        }
      });
    });
    return clickedMine;
  }

  revealMines(c) {
    let offset = 0;
    this.mines.forEach(mine => {
      const x = mine[0], y = mine[1];
      if (!this.grid[x][y].open) {
        setTimeout(() => this.grid[x][y].revealSquare(c), 100 + offset);
        offset += 100;
      }
    });
  }

  setSquaresOpen() {
    this.grid.forEach(row => {
      row.forEach(square => {
        if (!square.open) square.setOpen();
      });
    });
  }
}