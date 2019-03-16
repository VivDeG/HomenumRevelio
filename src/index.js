const Board = require('./board');
import { LEFT_CLICK, RIGHT_CLICK } from './board';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('canvas');
  canvas.width = 480;
  canvas.height = 480;
  let c = canvas.getContext('2d');

  const board = new Board();
  board.draw(c);

  window.oncontextmenu = (e) => {
    e.preventDefault();
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;
    const button = RIGHT_CLICK;
    board.findClickedSquare(x,y,button,c);
  }

  canvas.addEventListener('click', (e) => {
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;
    let button;
    if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey) {
      button = RIGHT_CLICK;
    } else {
      button = LEFT_CLICK;
    }
    board.findClickedSquare(x,y,button,c);
  }, false);
  
  // canvas.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  //   const x = e.pageX - canvas.offsetLeft;
  //   const y = e.pageY - canvas.offsetTop;
  //   const button = RIGHT_CLICK;
  //   board.findClickedSquare(x,y,button,c);
  // }, false);

  
});