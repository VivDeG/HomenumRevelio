import { Board, LEFT_CLICK, RIGHT_CLICK } from './board';

class Game {
  constructor() {
    this.board = new Board();
  }

  draw(c) {
    this.board.draw(c);
  }

  handleEvent(e,canvas,c) {
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;
    let button;
    if (e.type == "click") {
      button = LEFT_CLICK;
    } else {
      button = RIGHT_CLICK;
    }
    this.board.findClickedSquare(x, y, button, c);
  }
  
  gameOver(c) {
    this.board.revealMines(c);
  }
}

export default Game;