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
    if (this.gameOver) {
      this.lostGame(c);
    } else if (this.board.squaresOpen == 256 - 40) {
      this.wonGame();
    }
  }
  
  lostGame(c) {
    this.board.revealMines(c);
    this.board.setSquaresOpen();
    setTimeout(() => alert("Sorry, you lost. :("), 4000);
  }

  wonGame() {
    alert("Congratulations! You won!");
  }
}

export default Game;