import { Board, LEFT_CLICK, RIGHT_CLICK } from './board';

class Game {
  constructor() {
    this.board = new Board();
    this.gameOver = false;
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
    this.gameOver = this.board.findClickedSquare(x, y, button, c);
    if (this.gameOver) this.endGame(c);
  }
  
  endGame(c) {
    this.board.revealMines(c);
    this.board.setSquaresOpen();
  }
}

export default Game;