import Square from './square';
export const LEFT_CLICK = 0;
export const RIGHT_CLICK = 2;
const ADJACENTS = [[-1, -1], [0, -1], [1, -1],
                    [-1, 0], [1, 0],
                    [-1, 1], [0, 1], [1,1]];

export class Board {
  constructor() {
    this.grid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    this.mines = [];
    this.squaresOpen = 0;
  }

  draw(c) {
    this.placeMines();

    for (let i = 0; i < 256; i++) {
      const x = i % 16;
      const y = Math.floor(i / 16);
      if (!this.grid[x][y]){
        const value = this.getValue(x, y);
        this.grid[x][y] = (new Square(x, y, value));
      }
    }
    
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        this.grid[i][j].draw(c);
      }
    }
  }

  placeMines() {
    while (this.mines.length < 40) {
      let x = Math.floor(Math.random() * 16), y = Math.floor(Math.random() * 16);

      let filled = false;
      for (let i = 0; i < this.mines.length; i++) {
        if (this.mines[i][0] == x && this.mines[i][1] == y) {
          filled = true;
          break;
        }
      }

      if (!filled) {
        this.mines.push([x, y]);
        this.grid[x][y] = new Square(x, y, -1);
      }
    }
  }

  getValue(x,y) {
    let value = 0;
    ADJACENTS.forEach(adj => {
      if (this.validPos(x + adj[0], y + adj[1])) {
        const square = this.grid[x + adj[0]][y + adj[1]];
        if (square && square.value == -1) value++;
      }
    });
    return value;
  }

  validPos(x,y) {
    if (x >= 0 && x < 16 && y >= 0 && y < 16) return true;
    return false;
  }

  findClickedSquare(x,y,button,c) {
    let clickedMine = false;
    this.grid.forEach((row, i) => {
      row.forEach((square, j) => {

        if (square.clicked(x, y, c) && !square.open) {
          if (button == LEFT_CLICK && !square.flagged) {
            square.revealSquare(c);
            this.squaresOpen++;

            if (square.hasMine()) {
              clickedMine = true;
            } else if (square.value == 0) {
              this.openAdjacents(i, j, c);
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

  openAdjacents(x,y,c) {
    ADJACENTS.forEach(adj => {
      if (this.validPos(x + adj[0], y + adj[1])) {
        const square = this.grid[x + adj[0]][y + adj[1]];

        if (!square.open && !square.flagged) {
          square.revealSquare(c);
          this.squaresOpen++;
          if (square.value == 0) {
            this.openAdjacents(x + adj[0], y + adj[1], c);
          }
        }

      }
    });
  }

  revealMines(c) {
    let offset = 0;
    this.mines.forEach(mine => {
      const x = mine[0], y = mine[1];
      if (!this.grid[x][y].open && !this.grid[x][y].flagged) {
        setTimeout(() => this.grid[x][y].revealSquare(c), 100 + offset);
        offset += 100;
      }
    });
    return offset;
  }

  setSquaresOpen() {
    this.grid.forEach(row => {
      row.forEach(square => {
        if (!square.open) square.setOpen();
      });
    });
  }
}